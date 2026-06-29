import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './content-list.html',
})
export class ContentListComponent {
  @Input() items: any[] = [];
  @Input() basePath: string = '';
  @Input() pageTitle: string = '';
  @Input() pageSubtitle: string = '';
}
