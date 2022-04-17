import { Component } from '@angular/core';
import { faBriefcase, faImages, faQuestion, faBookOpen, faMap, faUsers } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar-grid',
  templateUrl: './navbar-grid.component.html',
  styleUrls: ['./navbar-grid.component.scss']
})
export class NavbarGridComponent  {
  faUsers = faUsers
  faMap = faMap
  faBriefcase = faBriefcase
  faBookOpen = faBookOpen
  faQuestion = faQuestion
  faImages = faImages
  constructor() { }
}
