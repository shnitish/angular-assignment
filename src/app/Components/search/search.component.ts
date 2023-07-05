import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public staticData = [
    {
      id: 1688542058207,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Chicken Curry',
      name: 'Chicken Curry',
    },
    {
      id: 1688542058208,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Beef Stir Fry',
      name: 'Beef Stir Fry',
    },
    {
      id: 1688542058209,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Pork Chop',
      name: 'Pork Chop',
    },
    {
      id: 1688542058210,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Grilled Fish',
      name: 'Grilled Fish',
    },
    {
      id: 1688542058211,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Lamb Biryani',
      name: 'Lamb Biryani',
    },
    {
      id: 1688542058212,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Vegetable Pasta',
      name: 'Vegetable Pasta',
    },
    {
      id: 1688542058213,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Fried Rice',
      name: 'Fried Rice',
    },
    {
      id: 1688542058214,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Margherita Pizza',
      name: 'Margherita Pizza',
    },
    {
      id: 1688542058215,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Tomato Soup',
      name: 'Tomato Soup',
    },
    {
      id: 1688542058216,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Caesar Salad',
      name: 'Caesar Salad',
    },
    {
      id: 1688542058217,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Chicken Curry',
      name: 'Chicken Curry',
    },
    {
      id: 1688542058218,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Beef Stir Fry',
      name: 'Beef Stir Fry',
    },
    {
      id: 1688542058219,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Pork Chop',
      name: 'Pork Chop',
    },
    {
      id: 1688542058220,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Grilled Fish',
      name: 'Grilled Fish',
    },
    {
      id: 1688542058221,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Lamb Biryani',
      name: 'Lamb Biryani',
    },
    {
      id: 1688542058222,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Vegetable Pasta',
      name: 'Vegetable Pasta',
    },
    {
      id: 1688542058223,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Fried Rice',
      name: 'Fried Rice',
    },
    {
      id: 1688542058224,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Margherita Pizza',
      name: 'Margherita Pizza',
    },
    {
      id: 1688542058225,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Tomato Soup',
      name: 'Tomato Soup',
    },
    {
      id: 1688542058226,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Caesar Salad',
      name: 'Caesar Salad',
    },
    {
      id: 1688542058227,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Chicken Curry',
      name: 'Chicken Curry',
    },
    {
      id: 1688542058228,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Beef Stir Fry',
      name: 'Beef Stir Fry',
    },
    {
      id: 1688542058229,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Pork Chop',
      name: 'Pork Chop',
    },
    {
      id: 1688542058230,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Grilled Fish',
      name: 'Grilled Fish',
    },
    {
      id: 1688542058231,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Lamb Biryani',
      name: 'Lamb Biryani',
    },
    {
      id: 1688542058232,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Vegetable Pasta',
      name: 'Vegetable Pasta',
    },
    {
      id: 1688542058233,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Fried Rice',
      name: 'Fried Rice',
    },
    {
      id: 1688542058234,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Margherita Pizza',
      name: 'Margherita Pizza',
    },
    {
      id: 1688542058235,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Tomato Soup',
      name: 'Tomato Soup',
    },
    {
      id: 1688542058236,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Caesar Salad',
      name: 'Caesar Salad',
    },
    {
      id: 1688542058237,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Chicken Curry',
      name: 'Chicken Curry',
    },
    {
      id: 1688542058238,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Beef Stir Fry',
      name: 'Beef Stir Fry',
    },
    {
      id: 1688542058239,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Pork Chop',
      name: 'Pork Chop',
    },
    {
      id: 1688542058240,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Grilled Fish',
      name: 'Grilled Fish',
    },
    {
      id: 1688542058241,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Lamb Biryani',
      name: 'Lamb Biryani',
    },
    {
      id: 1688542058242,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Vegetable Pasta',
      name: 'Vegetable Pasta',
    },
    {
      id: 1688542058243,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Fried Rice',
      name: 'Fried Rice',
    },
    {
      id: 1688542058244,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Margherita Pizza',
      name: 'Margherita Pizza',
    },
    {
      id: 1688542058245,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Tomato Soup',
      name: 'Tomato Soup',
    },
    {
      id: 1688542058246,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Caesar Salad',
      name: 'Caesar Salad',
    },
    {
      id: 1688542058247,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Chicken Curry',
      name: 'Chicken Curry',
    },
    {
      id: 1688542058248,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Beef Stir Fry',
      name: 'Beef Stir Fry',
    },
    {
      id: 1688542058249,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Pork Chop',
      name: 'Pork Chop',
    },
    {
      id: 1688542058250,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Grilled Fish',
      name: 'Grilled Fish',
    },
    {
      id: 1688542058251,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Lamb Biryani',
      name: 'Lamb Biryani',
    },
    {
      id: 1688542058252,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Vegetable Pasta',
      name: 'Vegetable Pasta',
    },
    {
      id: 1688542058253,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Fried Rice',
      name: 'Fried Rice',
    },
    {
      id: 1688542058254,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Margherita Pizza',
      name: 'Margherita Pizza',
    },
    {
      id: 1688542058255,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Tomato Soup',
      name: 'Tomato Soup',
    },
    {
      id: 1688542058256,
      imageLink: '../../../assets/images/chicken.jpg',
      imageAlt: 'Caesar Salad',
      name: 'Caesar Salad',
    },
  ];
  public searchResults: any = [];

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.searchInput.subscribe((val) => {
      if (!val) {
        this.searchResults = [];
        return;
      }
      this.searchResults = this.staticData.filter((data) => {
        return data.name.toLocaleLowerCase().includes(val.toLocaleLowerCase());
      });
    });
  }
}
