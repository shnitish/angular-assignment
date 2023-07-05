import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BESTSELLERS, CATEGORIES } from 'src/static/data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public categories = CATEGORIES;

  public bestSellers = BESTSELLERS;

  constructor(private router: Router, private route: ActivatedRoute) {}

  public navigateToCategory(): void {
    this.router.navigate(['1a2b3c'], { relativeTo: this.route });
  }
}
