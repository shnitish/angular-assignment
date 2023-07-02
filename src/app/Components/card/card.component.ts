import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() bestSeller: any;

  constructor(private globalService: GlobalService) {}

  public addToCart($event: any) {
    this.globalService.addItemsToCart({ id: this.bestSeller.id, qty: $event });
  }
}
