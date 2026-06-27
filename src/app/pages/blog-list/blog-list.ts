import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { ContentListComponent } from '../../components/content-list/content-list';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ContentListComponent],
  templateUrl: './blog-list.html',
})
export class BlogListComponent implements OnInit {
  dataService = inject(DataService);
  seoService = inject(SeoService);
  blogs = this.dataService.siteData().blogs || [];

  ngOnInit() {
    this.seoService.setSeoData(
      'Solar Energy Blog & News | Aussie Premium Solar',
      'Read the latest news, tips, and insights on solar panels, battery storage, and energy savings in Australia.',
      'solar blog Australia, solar news Perth, solar panel tips, battery storage insights',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop'
    );
  }
}
