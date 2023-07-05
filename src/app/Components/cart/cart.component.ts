import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/Interfaces/items.interface';
import { GlobalService } from 'src/app/Services/global.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cartItems: CartItem[] = [];
  public totalPrice!: Observable<number>;

  constructor(private globalService: GlobalService) {
    this.totalPrice = this.globalService.totalPriceSubject;
  }

  ngOnInit(): void {
    this.globalService.cartSubject.subscribe((val) => {
      this.cartItems = val.items;
    });
  }
}
