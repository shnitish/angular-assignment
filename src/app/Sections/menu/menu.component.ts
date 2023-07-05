import { Component } from '@angular/core';
import { MENU } from 'src/static/data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public menu = MENU;
}
