import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.html',
})
export class PackagesComponent {
  dataService = inject(DataService);
  popupService = inject(PopupService);
  packages = this.dataService.siteData().packages;
  
  // Create a signal to track the currently active tab ID. Default to the second tab.
  activeTab = signal<string>('solar-panels-battery');

  setActiveTab(id: string) {
    this.activeTab.set(id);
  }
}
