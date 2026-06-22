import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers.html',
  styleUrl: './suppliers.css'
})
export class SuppliersComponent {
  dataService = inject(DataService);
  originalSuppliers = this.dataService.siteData().suppliers || [];
  
  baseSequence: any[] = [];
  animationDuration = '30s';

  constructor() {
    if (this.originalSuppliers.length === 0) return;

    // We need the "base sequence" to be wide enough to cover any large screen (e.g. 4000px).
    this.baseSequence = [...this.originalSuppliers];
    while (this.baseSequence.length < 20) {
      this.baseSequence = [...this.baseSequence, ...this.originalSuppliers];
    }

    // Calculate a dynamic duration to keep the scrolling speed constant.
    const speedPerItem = 3; 
    this.animationDuration = `${this.baseSequence.length * speedPerItem}s`;
  }
}
