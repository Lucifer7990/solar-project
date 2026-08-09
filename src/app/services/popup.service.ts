import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  isOpen = signal<boolean>(false);

  openPopup() {
    this.isOpen.set(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  }

  closePopup() {
    this.isOpen.set(false);
    // Restore background scrolling
    document.body.style.overflow = '';
  }
}
