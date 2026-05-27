import { Injectable, signal } from '@angular/core';
import { siteData } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly siteData = signal(siteData);
}
