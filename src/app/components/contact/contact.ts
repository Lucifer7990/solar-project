import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {
  dataService = inject(DataService);
  cdr = inject(ChangeDetectorRef);
  contact = this.dataService.siteData().contact;

  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  // CAPTCHA properties
  num1 = 0;
  num2 = 0;
  captchaAnswer = '';
  captchaError = false;

  // Form states
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  ngOnInit() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    this.num1 = Math.floor(Math.random() * 10) + 1;
    this.num2 = Math.floor(Math.random() * 10) + 1;
    this.captchaAnswer = '';
    this.captchaError = false;
  }

  async submitForm() {
    // Validate CAPTCHA
    const expectedAnswer = this.num1 + this.num2;
    if (parseInt(this.captchaAnswer) !== expectedAnswer) {
      this.captchaError = true;
      this.generateCaptcha(); // Regenerate on failure
      return;
    }
    
    this.captchaError = false;
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    
    // @ts-ignore
    const emailJSConfig = this.contact.emailJS;
    
    if (!emailJSConfig || emailJSConfig.serviceId === 'YOUR_SERVICE_ID_HERE') {
      this.submitError = true;
      this.errorMessage = 'Email service is not configured. Please contact the administrator to set up EmailJS in data.ts.';
      this.isSubmitting = false;
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
            from_name: this.formData.name,
            reply_to: this.formData.email,
            phone_number: this.formData.phone,
            message: this.formData.message || 'No message provided.'
          }
        })
      });

      if (response.ok) {
        this.submitSuccess = true;
        this.formData = { name: '', phone: '', email: '', message: '' };
        this.generateCaptcha();
      } else {
        const errText = await response.text();
        throw new Error(errText);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.submitError = true;
      this.errorMessage = 'Failed to send message. Please try again later.';
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }
}
