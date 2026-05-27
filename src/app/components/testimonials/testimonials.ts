import { Component } from '@angular/core';

import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class TestimonialsComponent {
  dataService = inject(DataService);
  testimonials = this.dataService.siteData().testimonials;
  gallery = this.dataService.siteData().gallery;
}
