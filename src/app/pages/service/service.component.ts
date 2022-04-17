import { Component, NgModule } from '@angular/core';
import { faTimes, faCode, faMicrochip, faWandMagicSparkles, faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent  {
  faStar = faStar
  faCloudUpload = faCloudUpload
  faWandMagicSparkles = faWandMagicSparkles
  faCode = faCode
  faMicrochip = faMicrochip
  faTimes = faTimes
  constructor() { }
  currentYear = new Date().getFullYear();
}
