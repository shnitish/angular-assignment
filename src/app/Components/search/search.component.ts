import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';
import { BESTSELLERS } from 'src/static/data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public staticData = BESTSELLERS;
  public searchResults: any = [];

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.searchInput.subscribe((val) => {
      if (!val) {
        this.searchResults = [];
        return;
      }
      this.searchResults = this.staticData.filter((data) => {
        return data.heading
          .toLocaleLowerCase()
          .includes(val.toLocaleLowerCase());
      });
    });
  }
}
