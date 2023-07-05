import { Component } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';
import { Router } from '@angular/router';
import { ROUTES_ENUM } from 'src/Interfaces/enums';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public searchInput!: string;
  public ROUTES = ROUTES_ENUM;
  public $itemsInCart = this.globalService.totalItemsSubject;
  public $totalPriceOfCart = this.globalService.totalPriceSubject;

  constructor(private globalService: GlobalService, private router: Router) {}

  public toggleDrawer(): void {
    this.globalService.toggleDrawer();
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
