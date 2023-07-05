import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { ACTIVE_DRAWER } from 'src/Interfaces/enums';
import { CartItem, Store } from 'src/Interfaces/items.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  private store: Store = {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
  };
  public activeDrawer: ACTIVE_DRAWER | null = null;
  private searchInputSubject: Subject<string> = new Subject<string>();
  private toggleDrawerSub = new Subject<''>();
  private cartItems = new BehaviorSubject<{
    items: CartItem[];
    totalItemsInCart: number;
  }>({} as any);
  private totalItems = new BehaviorSubject<number>(this.store.totalItems);
  private totalPrice = new BehaviorSubject<number>(this.store.totalPrice);

  public searchInput: Observable<string> =
    this.searchInputSubject.asObservable();
  public toggleDrawerSubject = this.toggleDrawerSub.asObservable();
  public cartSubject = this.cartItems.asObservable();
  public totalItemsSubject = this.totalItems.asObservable();
  public totalPriceSubject = this.totalPrice.asObservable();

  public addItemsToCart(payload: {
    id: number;
    qty: number;
    price: number;
    name: string;
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
        const newItem = {
          id: payload.id,
          qtyInCart: payload.qty,
          name: payload.name,
          price: payload.price,
        };
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

  public toggleDrawer(currentDrawerContent: ACTIVE_DRAWER): void {
    this.activeDrawer = currentDrawerContent;
    this.toggleDrawerSub.next('');
  }

  public updateSearchInput(searchInput: string): void {
    this.searchInputSubject.next(searchInput);
  }
}
