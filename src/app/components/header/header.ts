import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  dataService = inject(DataService);
  data = this.dataService.siteData();
}

