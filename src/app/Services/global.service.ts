import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/Interfaces/items.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  private store: { cart: CartItem[]; totalItems: number; totalPrice: number } =
    {
      cart: [],
      totalItems: 0,
      totalPrice: 0,
    };

  private toggleLogin = new Subject<''>();
  private cartItems = new Subject<{
    items: CartItem[];
    totalItemsInCart: number;
  }>();
  private totalItems = new BehaviorSubject<number>(this.store.totalItems);
  private totalPrice = new BehaviorSubject<number>(this.store.totalPrice);

  public toggleLoginSubject = this.toggleLogin.asObservable();
  public cartSubject = this.cartItems.asObservable();
  public totalItemsSubject = this.totalItems.asObservable();
  public totalPriceSubject = this.totalPrice.asObservable();

  public addItemsToCart(payload: {
    id: number;
    qty: number;
    price: number;
  }): void {
    if (payload.qty < 1) {
      this.store.cart = this.store.cart.filter(
        (item) => item.id !== payload.id
      );
    } else {
      const existingItem = this.store.cart.find((item) => {
        return item.id === payload.id;
      });
      if (existingItem) {
        existingItem.qtyInCart = payload.qty;
      } else {
        const newItem = { id: payload.id, qtyInCart: payload.qty };
        this.store.cart.push(newItem);
      }
    }
    this.store.totalItems = this.store.cart.length;
    this.store.totalPrice += payload.price;
    this.totalItems.next(this.store.totalItems);
    this.totalPrice.next(this.store.totalPrice);
    return this.cartItems.next({
      items: this.store.cart,
      totalItemsInCart: this.store.totalItems,
    });
  }

  public toggleLoginDrawer(): void {
    this.toggleLogin.next('');
  }
}
