import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class CalculatorComponent {
  monthlyBill = 150;
  
  get yearlySavings() {
    // Rough estimate: Save 80% of bill if switching to solar
    return Math.round((this.monthlyBill * 12) * 0.8);
  }

  get twentyYearSavings() {
    return this.yearlySavings * 20;
  }
}

