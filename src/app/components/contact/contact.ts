import { Component } from '@angular/core';

import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  dataService = inject(DataService);
  contact = this.dataService.siteData().contact;
}
