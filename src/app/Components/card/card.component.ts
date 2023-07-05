import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from 'src/Interfaces/items.interface';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() bestSeller!: Item;

  constructor(
    private globalService: GlobalService,
    private snackBar: MatSnackBar
  ) {}

  private handleCartAction(item: {
    id: number;
    qty: number;
    price: number;
    name: string;
  }): void {
    this.globalService.addItemsToCart(item);
  }

  public addToCart($event: number): void {
    const item = {
      id: this.bestSeller.id,
      qty: $event,
      price: Number(this.bestSeller.discountedPrice),
      name: this.bestSeller.heading,
    };
    this.handleCartAction(item);
    this.openSnackBar(`${this.bestSeller.heading} has been added to the cart`);
  }

  public removeFromCart($event: number): void {
    const item = {
      id: this.bestSeller.id,
      qty: $event,
      price: -Number(this.bestSeller.discountedPrice),
      name: this.bestSeller.heading,
    };
    this.handleCartAction(item);
    this.openSnackBar(
      `${this.bestSeller.heading} has been removed from the cart`
    );
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      duration: 2000,
    });
  }
}
