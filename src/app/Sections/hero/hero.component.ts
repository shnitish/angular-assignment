import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public categories = [
    {
      id: Date.now(),
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'WoW Weekends',
    },
    {
      id: Date.now() + 1,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Coral Reef',
    },
    {
      id: Date.now() + 2,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Tropical Fish',
    },
    {
      id: Date.now() + 3,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Underwater World',
    },
    {
      id: Date.now() + 4,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Marine Life',
    },
    {
      id: Date.now() + 5,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Deep Sea Creatures',
    },
    {
      id: Date.now() + 6,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Exotic Species',
    },
    {
      id: Date.now() + 7,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Aquatic Wonders',
    },
    {
      id: Date.now() + 8,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Majestic Mollusks',
    },
    {
      id: Date.now() + 9,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Rivers and Streams',
    },
    {
      id: Date.now() + 10,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Freshwater Beauties',
    },
    {
      id: Date.now() + 11,
      imageLink: '../../../assets/images/fish-thumbnail.png',
      imageAlt: 'Fish',
      imageDescription: 'Saltwater Delights',
    },
  ];

  public bestSellers = [
    {
      id: Date.now() + 1,
      imageLink: '../../../assets/images/chicken-breast.webp',
      heading: 'Chicken Curry Cut - Small Pieces',
      quantity: '500gms',
      discountedPrice: '179',
      price: '189',
      discount: '5%',
    },
    {
      id: Date.now() + 2,
      imageLink: '../../../assets/images/chicken-breast.webp',
      heading: 'Chicken Curry Cut - Small Pieces',
      quantity: '500gms',
      discountedPrice: '179',
      price: '189',
      discount: '5%',
    },
    {
      id: Date.now() + 3,
      imageLink: '../../../assets/images/chicken-breast.webp',
      heading: 'Chicken Curry Cut - Small Pieces',
      quantity: '500gms',
      discountedPrice: '179',
      price: '189',
      discount: '5%',
    },
    {
      id: Date.now() + 4,
      imageLink: '../../../assets/images/chicken-breast.webp',
      heading: 'Chicken Curry Cut - Small Pieces',
      quantity: '500gms',
      discountedPrice: '179',
      price: '189',
      discount: '5%',
    },
    {
      id: Date.now() + 5,
      imageLink: '../../../assets/images/chicken-breast.webp',
      heading: 'Chicken Curry Cut - Small Pieces',
      quantity: '500gms',
      discountedPrice: '179',
      price: '189',
      discount: '5%',
    },
    {
      id: Date.now() + 6,
      imageLink: '../../../assets/images/chicken-breast.webp',
      heading: 'Chicken Curry Cut - Small Pieces',
      quantity: '500gms',
      discountedPrice: '179',
      price: '189',
      discount: '5%',
    },
    {
      id: Date.now() + 7,
      imageLink: '../../../assets/images/chicken-breast.webp',
      heading: 'Chicken Curry Cut - Small Pieces',
      quantity: '500gms',
      discountedPrice: '179',
      price: '189',
      discount: '5%',
    },
    {
      id: Date.now() + 8,
      imageLink: '../../../assets/images/chicken-breast.webp',
      heading: 'Chicken Curry Cut - Small Pieces',
      quantity: '500gms',
      discountedPrice: '179',
      price: '189',
      discount: '5%',
    },
    {
      id: Date.now() + 9,
      imageLink: '../../../assets/images/chicken-breast.webp',
      heading: 'Chicken Curry Cut - Small Pieces',
      quantity: '500gms',
      discountedPrice: '179',
      price: '189',
      discount: '5%',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  public navigateToCategory(): void {
    this.router.navigate(['abc'], { relativeTo: this.route });
  }
}
