import { Component } from '@angular/core';
import {MENU} from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alza';

  menu = MENU;
}
