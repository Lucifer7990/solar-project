import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.html'
})
export class PrivacyComponent {
  data = inject(DataService).siteData();
}
