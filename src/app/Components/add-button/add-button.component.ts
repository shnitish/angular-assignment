import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent {
  @Input()
  set counter(val: number) {
    this.qty = val;
  }

  public qty = 0;

  @Output() addItem = new EventEmitter<any>();
  @Output() removeItem = new EventEmitter<any>();

  public addToCart(): void {
    this.addItem.emit(++this.qty);
  }

  public decrement(): void {
    this.removeItem.emit(--this.qty);
  }
}
