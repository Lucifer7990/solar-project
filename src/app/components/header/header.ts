import { Component, HostListener } from '@angular/core';
import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  dataService = inject(DataService);
  router = inject(Router);
  data = this.dataService.siteData();
  
  isScrolled = false;
  isHomePage = true;

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects.startsWith('/#');
    });
  }

  get isHeaderWhite() {
    return !this.isHomePage || this.isScrolled;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }
}
