import { Component, Input } from '@angular/core';
import { IRemedy } from '../../../models/IRemedy';

@Component({
  selector: 'app-remedy',
  templateUrl: './remedy.component.html',
  styleUrl: './remedy.component.css'
})
export class RemedyComponent {
  @Input() remedio!: IRemedy;
}
