import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  dataService = inject(DataService);
  data = this.dataService.siteData();
  year = new Date().getFullYear();
}

