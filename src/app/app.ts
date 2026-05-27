import { Component, inject } from '@angular/core';
import { DataService } from './services/data.service';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { CalculatorComponent } from './components/calculator/calculator';
import { ServicesComponent } from './components/services/services';
import { BenefitsComponent } from './components/benefits/benefits';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    CalculatorComponent,
    ServicesComponent,
    BenefitsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Australian Premium Solar';
  dataService = inject(DataService);

  get whatsappLink() {
    const phone = this.dataService.siteData().contact.phone.replace(/\D/g, '');
    const waNumber = phone.startsWith('0') ? '61' + phone.substring(1) : phone;
    return `https://wa.me/${waNumber}`;
  }
}
