import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { ContentDetailComponent } from '../../components/content-detail/content-detail';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ContentDetailComponent],
  templateUrl: './product-detail.html',
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() slug?: string;
  dataService = inject(DataService);
  seoService = inject(SeoService);
  router = inject(Router);
  
  product: any;

  ngOnInit() {
    this.loadProduct();
  }

  ngOnChanges() {
    this.loadProduct();
  }

  loadProduct() {
    if (!this.slug) return;
    
    const products = this.dataService.siteData().products || [];
    this.product = products.find(p => p.slug === this.slug);

    if (this.product) {
      this.seoService.setSeoData(
        `${this.product.title} | Aussie Premium Solar`,
        this.product.summary,
        'solar energy, products, australia',
        this.product.image
      );
    } else {
      this.router.navigate(['/products']);
    }
  }
}
