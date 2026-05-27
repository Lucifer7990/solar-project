import { Component } from '@angular/core';

import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class BenefitsComponent {
  dataService = inject(DataService);
  stats = this.dataService.siteData().stats;
}
