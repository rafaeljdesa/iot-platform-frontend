import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.sidenavService.setDrawer(this.drawer);
  }

}
