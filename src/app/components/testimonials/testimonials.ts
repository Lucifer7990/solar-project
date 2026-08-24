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
  googleReviews = this.dataService.siteData().googleReviews;
  googleReviewLink = this.dataService.siteData().googleReviewLink;
  gallery = this.dataService.siteData().gallery;

  getAvatarColor(name: string): string {
    const colors = ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];
    const index = name ? name.charCodeAt(0) % colors.length : 0;
    return colors[index];
  }
}
