import { Component } from '@angular/core';

@Component({
  selector: 'app-moodlist',
  templateUrl: './moodlist.component.html',
  styleUrl: './moodlist.component.css'
})
export class MoodlistComponent {
  moods=[
    {data: 'DD/MM/AA', hora: 'HH/MM'},
  ]
}
