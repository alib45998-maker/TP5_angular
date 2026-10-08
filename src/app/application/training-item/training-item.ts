import { Component, input, output } from '@angular/core';
import { Training } from '../training';

@Component({
  selector: 'app-training-item',
  imports: [],
  templateUrl: './training-item.html',
  styleUrl: './training-item.css',
})
export class TrainingItem {
  training = input.required<Training>();
  position = input.required<number>({ alias: 'position' });
  supprimeTraining = output<number>();
  onsupprime(){
    this.supprimeTraining.emit(this.training().id);
  }
}
