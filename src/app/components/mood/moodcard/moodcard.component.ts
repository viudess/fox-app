import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moodcard',
  templateUrl: './moodcard.component.html',
  styleUrl: './moodcard.component.css'
})
export class MoodcardComponent {
  @Input() data!: string;
  @Input() hora!: string;
}
