import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  faTimes = faTimes;
  constructor() {}
  currentYear = new Date().getFullYear();
}
