import { Component } from '@angular/core';
import { FISH_CATEGORY } from 'src/static/data';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  public category = FISH_CATEGORY;
}
