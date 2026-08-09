import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-content-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './content-detail.html',
})
export class ContentDetailComponent implements OnInit {
  @Input() item: any;
  @Input() backLink: string = '';
  @Input() backText: string = 'Back';

  route = inject(ActivatedRoute);
  router = inject(Router);
  dataService = inject(DataService);
  seoService = inject(SeoService);
  sanitizer = inject(DomSanitizer);
  popupService = inject(PopupService);

  ngOnInit(): void {}
}
