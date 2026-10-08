import { Component, signal } from '@angular/core';
import { TrainingList } from './application/training-list/training-list';

@Component({
  selector: 'app-root',
  imports: [TrainingList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TP5');
}
