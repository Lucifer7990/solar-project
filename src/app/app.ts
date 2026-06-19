import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Australian Premium Solar';
  dataService = inject(DataService);

  get whatsappLink() {
    const phone = this.dataService.siteData().contact.phone.replace(/\D/g, '');
    const waNumber = phone.startsWith('0') ? '61' + phone.substring(1) : phone;
    return `https://wa.me/${waNumber}`;
  }
}
