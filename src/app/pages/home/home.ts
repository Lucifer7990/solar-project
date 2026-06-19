import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { CalculatorComponent } from '../../components/calculator/calculator';
import { ServicesComponent } from '../../components/services/services';
import { BenefitsComponent } from '../../components/benefits/benefits';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    BenefitsComponent,
    CalculatorComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
})
export class HomeComponent {}
