import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent {
  dataService = inject(DataService);
  services = this.dataService.siteData().services;
  whyChoose = this.dataService.siteData().whyChoose;
    data = this.dataService.siteData();

}
