import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor(
    private sidenavService: SidenavService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((e: RoutesRecognized) => e instanceof RoutesRecognized)
    ).subscribe((e: RoutesRecognized) => {
      this.title = e.state.root.firstChild.data.title;
    });
  }

  toggleMenu() {
    this.sidenavService.toggle();
  }

}
