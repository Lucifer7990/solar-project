import { Component, OnInit, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

import { DataService } from '../../services/data.service';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-quote-popup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quote-popup.html',
})
export class QuotePopupComponent implements OnInit {
  dataService = inject(DataService);
  popupService = inject(PopupService);
  contact = this.dataService.siteData().contact;

  // Form Fields using Signals
  name = signal('');
  phone = signal('');
  email = signal('');
  suburb = signal('');
  postalCode = signal('');
  message = signal('');

  // CAPTCHA properties using Signals
  num1 = signal(0);
  num2 = signal(0);
  captchaAnswer = signal('');
  captchaError = signal(false);

  // Form states using Signals
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);
  errorMessage = signal('');

  ngOnInit() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    this.num1.set(Math.floor(Math.random() * 10) + 1);
    this.num2.set(Math.floor(Math.random() * 10) + 1);
    this.captchaAnswer.set('');
    this.captchaError.set(false);
  }

  closePopup() {
    this.popupService.closePopup();
    // Optional: reset form state upon closing so it's fresh next time
    setTimeout(() => {
      this.resetForm();
    }, 300);
  }

  resetForm() {
    this.name.set('');
    this.phone.set('');
    this.email.set('');
    this.suburb.set('');
    this.postalCode.set('');
    this.message.set('');
    this.submitSuccess.set(false);
    this.submitError.set(false);
    this.generateCaptcha();
  }

  triggerConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4AF37', '#1A2942', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4AF37', '#1A2942', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }

  async submitForm() {
    // Validate CAPTCHA
    const expectedAnswer = this.num1() + this.num2();
    if (parseInt(this.captchaAnswer()) !== expectedAnswer) {
      this.captchaError.set(true);
      this.generateCaptcha(); // Regenerate on failure
      return;
    }
    
    this.captchaError.set(false);
    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);
    
    // @ts-ignore
    const emailJSConfig = this.contact.emailJS;
    
    if (!emailJSConfig || emailJSConfig.serviceId === 'YOUR_SERVICE_ID_HERE') {
      this.submitError.set(true);
      this.errorMessage.set('Email service is not configured. Please contact the administrator to set up EmailJS in data.ts.');
      this.isSubmitting.set(false);
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: emailJSConfig.serviceId,
          template_id: emailJSConfig.templateId,
          user_id: emailJSConfig.publicKey,
          template_params: {
            from_name: this.name(),
            reply_to: this.email(),
            phone_number: this.phone(),
            suburb: this.suburb(),
            postal_code: this.postalCode(),
            message: this.message() || 'No message provided.'
          }
        })
      });

      if (response.ok) {
        this.submitSuccess.set(true);
        this.triggerConfetti();
        // Wait for animation to finish before closing
        setTimeout(() => {
          this.closePopup();
        }, 3500);
      } else {
        const errText = await response.text();
        throw new Error(errText);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.submitError.set(true);
      this.errorMessage.set('Failed to send message. Please try again later.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
