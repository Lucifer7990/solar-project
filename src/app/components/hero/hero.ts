import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  dataService = inject(DataService);
  data = this.dataService.siteData();
}

