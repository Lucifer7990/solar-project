import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  dataService = inject(DataService);
  data = this.dataService.siteData();
  year = new Date().getFullYear();
}

