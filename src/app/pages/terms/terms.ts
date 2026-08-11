import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.html'
})
export class TermsComponent {
  data = inject(DataService).siteData();
}
