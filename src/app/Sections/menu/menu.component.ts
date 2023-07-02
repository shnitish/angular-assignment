import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public menu = [
    {
      category: 'Spreads',
      items: [
        'Chunky Continental Chicken Spread',
        'Chunky Butter Chicken Spread',
        'Chunky Sweet Tamarind Chicken Spread',
        'Chunky Herby Tomato Chicken Spread',
        'Chunky Shawarma Chicken Spread',
        'Chunky Honey-Mustard Chicken Spread',
      ],
    },
    {
      category: 'Chicken',
      items: [
        'Chicken Curry Cut (Large - 8 to 10 Pieces)',
        'Chicken Breast - Boneless',
        'Chicken Drumstick - Skinless',
        'Tender Spring Chicken Curry Cut',
        'Chicken Leg (Whole) with Thigh',
        'Chicken Thigh (Boneless)',
      ],
    },
    {
      category: 'Mutton',
      items: [
        'Goat Boneless',
        'Goat Mince/Keema',
        'Premium Lamb Curry Cut',
        'Goat Shoulder - Curry Cut',
        'Lamb Boneless',
        'Goat Curry Cut (Shoulder Chaamp Puth - 11 to 14 pieces)',
      ],
    },
    {
      category: 'Fish & Seafood',
      items: [
        'Seer (Surmai) Steaks',
        'Freshwater Rohu Large - Bengali Cut (w/o Head)',
        'White Pomfret - (Whole and Cleaned)',
        'Indian Salmon/Rawas Steaks',
        'Basa Fillet - (Platinum Grade)',
        'Prawns Small (Whole)',
        'Freshwater Rohu - Bengali Cut (Without Head)',
        'Singara Steaks',
      ],
    },
    {
      category: 'Meat Masala',
      items: [
        'Asli Garam Masala',
        'Original Tandoori Chicken Masala',
        'Shandaar Butter Chicken Masala',
        'Khansama Biryani Masala',
        'Classic Meat Masala',
        'Chatpata Fish Fry Masala',
        'Dakshin Pepper Fry Masala',
      ],
    },
  ];
}
