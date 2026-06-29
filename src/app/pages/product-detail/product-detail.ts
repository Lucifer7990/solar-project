import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './product-detail.html',
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() slug?: string;
  dataService = inject(DataService);
  seoService = inject(SeoService);
  router = inject(Router);
  
  product: any;
  selectedImage: string = '';

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
      this.selectedImage = this.product.images && this.product.images.length > 0 ? this.product.images[0] : this.product.image;

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

  selectImage(img: string) {
    this.selectedImage = img;
  }

  nextImage() {
    if (!this.product || !this.product.images) return;
    const currentIndex = this.product.images.indexOf(this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.product.images.length;
    this.selectedImage = this.product.images[nextIndex];
  }

  prevImage() {
    if (!this.product || !this.product.images) return;
    const currentIndex = this.product.images.indexOf(this.selectedImage);
    const prevIndex = (currentIndex - 1 + this.product.images.length) % this.product.images.length;
    this.selectedImage = this.product.images[prevIndex];
  }
}
