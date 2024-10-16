import { Component } from '@angular/core';

@Component({
  selector: 'app-addcalendar',
  templateUrl: './addcalendar.component.html',
  styleUrl: './addcalendar.component.css'
})
export class AddcalendarComponent {
  clicado: number | null = 0;
  periodo: string = 'AM';

  mudarCor(index: number) {
    this.clicado = index;
  }

  alternarAmPm() {
    this.periodo = this.periodo === 'AM' ? 'PM' : 'AM';
  }
}
