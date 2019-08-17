import { Component } from '@angular/core';
import { MENU_ITEMS } from './menu.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  menu = MENU_ITEMS;
}
