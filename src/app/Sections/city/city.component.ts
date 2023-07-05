import { Component } from '@angular/core';
import { CITIES } from '../../../static/data';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent {
  public cities = CITIES;
}
