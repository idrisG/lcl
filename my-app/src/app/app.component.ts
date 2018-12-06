import { Component } from '@angular/core';
import { OFFERS } from './mock-offers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LCL';
  offers = OFFERS;
}
