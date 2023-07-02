import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public $itemsInCart = this.globalService.totalItemsSubject;
  public $totalPriceOfCart = this.globalService.totalPriceSubject;

  ngOnInit(): void {}

  constructor(private globalService: GlobalService) {}

  public toggleLoginDrawer(): void {
    this.globalService.toggleLoginDrawer();
  }
}
