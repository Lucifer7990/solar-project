import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.html',
})
export class BlogDetailComponent implements OnInit, OnChanges {
  @Input() slug?: string;
  dataService = inject(DataService);
  seoService = inject(SeoService);
  router = inject(Router);
  
  blog: any;

  ngOnInit() {
    this.loadBlog();
  }

  ngOnChanges() {
    this.loadBlog();
  }

  loadBlog() {
    if (!this.slug) return;
    
    const blogs = this.dataService.siteData().blogs || [];
    this.blog = blogs.find(b => b.slug === this.slug);

    if (this.blog) {
      this.seoService.setSeoData(
        `${this.blog.title} | Aussie Premium Solar`,
        this.blog.description || this.blog.summary,
        this.blog.keywords || 'solar energy, western australia',
        this.blog.image
      );
    } else {
      this.router.navigate(['/blog']);
    }
  }
}
