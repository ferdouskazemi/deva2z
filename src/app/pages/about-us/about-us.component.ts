import { Component, HostListener } from '@angular/core';
import { faTimes, faBrain, faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent  {
  faTimes = faTimes
  faCode = faCode
  faLaptopCode = faLaptopCode
  faBrain = faBrain
  constructor() { }
  currentYear = new Date().getFullYear();
}
