import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private drawer: MatDrawer;

  constructor() { }

  toggle() {
    if (!this.drawer) return;
    this.drawer.toggle();    
  }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

}
