import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { ContentListComponent } from '../../components/content-list/content-list';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ContentListComponent],
  templateUrl: './product-list.html',
})
export class ProductListComponent implements OnInit {
  dataService = inject(DataService);
  seoService = inject(SeoService);
  products = this.dataService.siteData().products || [];

  ngOnInit() {
    this.seoService.setSeoData(
      'Solar Products & Solutions | Aussie Premium Solar',
      'Explore our range of premium solar panels, smart inverters, and battery storage solutions in Australia.',
      'solar products Australia, solar panels Perth, solar inverters, solar batteries',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop'
    );
  }
}
