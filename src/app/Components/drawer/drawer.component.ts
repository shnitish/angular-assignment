import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ACTIVE_DRAWER } from 'src/Interfaces/enums';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  public activeDrawer = ACTIVE_DRAWER;

  constructor(public globalService: GlobalService) {}
  ngOnInit(): void {
    this.globalService.toggleDrawerSubject.subscribe(() =>
      this.drawer.toggle()
    );
  }
}
