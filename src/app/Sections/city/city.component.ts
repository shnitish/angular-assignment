import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent {
  public cities = [
    'Bengaluru',
    'NCR',
    'Hyderabad',
    'Chandigarh',
    'Panchkula',
    'Mohali',
    'Mumbai',
    'Pune',
    'Chennai',
    'Coimbatore',
    'Jaipur',
    'Cochin',
    'Vijayawada',
    'Visakhapatnam',
    'Kolkata',
    'Lucknow',
    'Kanpur',
    'Nagpur',
  ];
}
