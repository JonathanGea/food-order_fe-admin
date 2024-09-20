import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] | undefined;
  isMenuVisible: boolean = true;
  isMenuVisibleSidebar: boolean = false;
  isMobile: boolean = window.innerWidth < 768;

  sidebarVisible:boolean= true;

  constructor(private router: Router) {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Product',
            icon: 'pi pi-plus',
            routerLink: '/product',
            command: (event) => this.onMenuItemClick(event),
          },
          {
            label: 'Customer',
            icon: 'pi pi-search',
            routerLink: '/customer',
            command: (event) => this.onMenuItemClick(event),
          },
          {
            label: 'Upload',
            icon: 'pi pi-upload',
            routerLink: '/upload',
          },
          {
            label: 'Download',
            icon: 'pi pi-download',
            routerLink: '/download',
          },
        ],
      },
    ];
  }

  onMenuItemClick(event: any) {
    if (event.item.routerLink) {
      this.router.navigate([event.item.routerLink]);
    }
  }

  toggleMenu() {
    if (this.isMobile == true ){
      this.isMenuVisibleSidebar = !this.isMenuVisibleSidebar;
    }else{
      this.isMenuVisible = !this.isMenuVisible;
    }
  }
}
