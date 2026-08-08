import { Component } from '@angular/core';
import { siteData } from '../../data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './why-choose.html',
})
export class WhyChooseComponent {
  data = siteData;
  whyChoose = siteData.whyChoose;
}
