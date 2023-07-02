import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/Interfaces/items.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  private cart: CartItem[] = [];
  private total = 0;

  private toggleLogin = new Subject<''>();
  private cartItems = new Subject<{
    items: CartItem[];
    totalItemsInCart: number;
  }>();
  private totalItems = new BehaviorSubject<number>(this.total);

  public toggleLoginSubject = this.toggleLogin.asObservable();
  public cartSubject = this.cartItems.asObservable();
  public totalItemsSubject = this.totalItems.asObservable();

  public addItemsToCart(payload: { id: number; qty: number }): void {
    if (payload.qty < 1) {
      this.cart = this.cart.filter((item) => item.id !== payload.id);
    } else {
      const existingItem = this.cart.find((item) => {
        return item.id === payload.id;
      });
      if (existingItem) {
        existingItem.qtyInCart = payload.qty;
      } else {
        const newItem = { id: payload.id, qtyInCart: payload.qty };
        this.cart.push(newItem);
      }
    }
    this.total = this.cart.length;
    this.totalItems.next(this.total);
    return this.cartItems.next({
      items: this.cart,
      totalItemsInCart: this.total,
    });
  }

  public toggleLoginDrawer(): void {
    this.toggleLogin.next('');
  }
}
