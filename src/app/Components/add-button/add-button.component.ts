import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent {
  private qty = 0;

  @Output() addItem = new EventEmitter<any>();

  public addToCart() {
    this.addItem.emit(++this.qty);
  }

  public decrement() {
    this.addItem.emit(--this.qty);
  }
}
