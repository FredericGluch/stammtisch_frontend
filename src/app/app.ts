import { Component, signal } from '@angular/core';
import { Rating } from '../rating/rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [Rating]
})
export class App {
  protected readonly title = signal('stammtisch');
}
