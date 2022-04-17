import { Component } from '@angular/core';
import { faTimes , faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent  {
  faTimes=faTimes
  faStar=faStar
  constructor() { }
  currentYear = new Date().getFullYear();
}
