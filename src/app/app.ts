import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { DataService } from './services/data.service';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Australian Premium Solar';
  dataService = inject(DataService);
  router = inject(Router);
  
  isHomePage = true;

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects.startsWith('/#');
    });
  }

  get whatsappLink() {
    const phone = this.dataService.siteData().contact.phone.replace(/\D/g, '');
    const waNumber = phone.startsWith('0') ? '61' + phone.substring(1) : phone;
    return `https://wa.me/${waNumber}`;
  }
}
