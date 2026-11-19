import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Pizza, PizzaComment } from '../../models';
import { PizzaItem } from '../pizza-item/pizza-item';

@Component({
  selector: 'app-pizza-list',
  imports: [PizzaItem],
  templateUrl: './pizza-list.html',
  styleUrl: './pizza-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaList {
 pizzasList = signal<Pizza[]>([
{ id: 1, name: "Neptune", image: "images/neptune.jpg", price: 11.3, vegetarian:
false },
{ id: 2, name: "4 Saisons", image: "images/saisons.jpg", price: 12.5, vegetarian:
true },
{ id: 3, name: "Fruits de Mer", image: "images/mer.jpg", price: 18.4, vegetarian:
false },
{ id: 4, name: "Marguerite", image: "images/marguerite.jpg", price: 9.8,
vegetarian: true }
]);

  removePizza(pizzaId: number): void {
    this.pizzasList.update((pizzas) => pizzas.filter((pizza) => pizza.id != pizzaId));
  }

  
}
