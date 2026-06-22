import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content-detail.html',
})
export class ContentDetailComponent {
  @Input() item: any;
  @Input() backLink: string = '';
  @Input() backText: string = 'Back';
}
