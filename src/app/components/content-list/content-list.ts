import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content-list.html',
})
export class ContentListComponent {
  @Input() items: any[] = [];
  @Input() basePath: string = '';
  @Input() pageTitle: string = '';
  @Input() pageSubtitle: string = '';
}
