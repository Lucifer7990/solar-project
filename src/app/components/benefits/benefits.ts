import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class BenefitsComponent {
  dataService = inject(DataService);
  stats = this.dataService.siteData().stats;
}
