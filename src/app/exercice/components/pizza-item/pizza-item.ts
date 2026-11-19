import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Pizza } from '../../models';

@Component({
  selector: 'app-pizza-item',
  imports: [DecimalPipe],
  templateUrl: './pizza-item.html',
  styleUrl: './pizza-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaItem {
  pizza = input.required<Pizza>();
  deletePizza = output<number>();
 



  
}
