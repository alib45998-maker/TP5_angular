import { Component, signal } from '@angular/core';
import { PizzaList } from './exercice/components/pizza-list/pizza-list';

@Component({
  selector: 'app-root',
  imports: [PizzaList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TP5');
}
