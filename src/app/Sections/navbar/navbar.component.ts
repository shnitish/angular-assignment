import { Component } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';
import { Router } from '@angular/router';
import { ACTIVE_DRAWER, ROUTES_ENUM } from 'src/Interfaces/enums';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public activeDrawerEnum = ACTIVE_DRAWER;
  public searchInput!: string;
  public ROUTES = ROUTES_ENUM;
  public $itemsInCart = this.globalService.totalItemsSubject;
  public $totalPriceOfCart = this.globalService.totalPriceSubject;

  constructor(private globalService: GlobalService, private router: Router) {}

  public toggleDrawer(activeDrawerComp: ACTIVE_DRAWER): void {
    this.globalService.toggleDrawer(activeDrawerComp);
  }

  public navigateToHome(): void {
    this.router.navigate([this.ROUTES.HOME]);
  }

  public navigateToSearch(): void {
    this.router.navigate([this.ROUTES.SEARCH]);
  }

  public updateSearchTerm(searchTerm: string): void {
    this.globalService.updateSearchInput(searchTerm);
  }
}
