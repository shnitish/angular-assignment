import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css'],
})
export class ClaimsComponent {
  @Input() claims: any;
}
