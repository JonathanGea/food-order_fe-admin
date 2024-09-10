import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {

  onSettingsClick() {
    console.log('Settings button clicked!');
  }

  onUserClick() {
    console.log('User button clicked!');
  }

  sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  @Output() menuToggle = new EventEmitter<void>();

  onMenuClick() {
    console.log('Menu button clicked');
    this.menuToggle.emit(); // Emit an event to toggle the menu
  }
}
