import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // isSidebarVisible: boolean = false;
  // toggleSidebar() {
  //   this.isSidebarVisible = !this.isSidebarVisible;
  // }
  displaySidebar: boolean = false;

  toggleSidebar() {
    this.displaySidebar = !this.displaySidebar;
  }
}
