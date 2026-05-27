import { Component } from '@angular/core';

import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent {
  dataService = inject(DataService);
  services = this.dataService.siteData().services;
  whyChoose = this.dataService.siteData().whyChoose;
}
