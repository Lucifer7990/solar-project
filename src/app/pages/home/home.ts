import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { CalculatorComponent } from '../../components/calculator/calculator';
import { ServicesComponent } from '../../components/services/services';
import { BenefitsComponent } from '../../components/benefits/benefits';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { ContactComponent } from '../../components/contact/contact';
import { SuppliersComponent } from '../../components/suppliers/suppliers';
import { PackagesComponent } from '../../components/packages/packages';
import { WhyChooseComponent } from '../../components/why-choose/why-choose';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SuppliersComponent,
    BenefitsComponent,
    CalculatorComponent,
    ServicesComponent,
    PackagesComponent,
    WhyChooseComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
})
export class HomeComponent {}
