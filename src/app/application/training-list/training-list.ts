import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Training } from '../training';
import { TrainingItem } from '../training-item/training-item';

@Component({
  selector: 'app-training-list',
  imports: [JsonPipe, TrainingItem],
  templateUrl: './training-list.html',
  styleUrls: ['./training-list.css'],
})
export class TrainingList {
  trainingCatalog = signal<Training[]>([
    { id: 125, name: 'Introduction à Angular', nbDays: 3, isFree: false },
    { id: 587, name: 'Grid & Flexbox', nbDays: 3, isFree: true },
    { id: 879, name: 'Node JS avancé', nbDays: 4, isFree: false },
    { id: 859, name: 'HTML5 & CSS', nbDays: 2, isFree: true },
  ]);

  addTraining(): void {
    const nextId = Math.floor(Math.random() * 1_000_000) + 1;
    const nextIndex = this.trainingCatalog().length + 1;

    const newTraining: Training = {
      id: nextId,
      name: `Formation ${nextIndex}`,
      nbDays: (nextIndex % 5) + 1,
      isFree: nextIndex % 2 === 0,
    };

    this.trainingCatalog.update((catalog) => [...catalog, newTraining])}








OnRemoveTraining(idtrain : number){

  this.trainingCatalog.update(formations => formations.filter(f => f.id != idtrain))
}













}
