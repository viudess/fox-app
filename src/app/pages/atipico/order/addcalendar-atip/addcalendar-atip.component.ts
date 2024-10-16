import { Component } from '@angular/core';

@Component({
  selector: 'app-addcalendar-atip',
  templateUrl: './addcalendar-atip.component.html',
  styleUrl: './addcalendar-atip.component.css'
})
export class AddcalendarAtipComponent {
  clicado: number | null = 0;
  periodo: string = 'AM';

  mudarCor(index: number) {
    this.clicado = index;
  }

  alternarAmPm() {
    this.periodo = this.periodo === 'AM' ? 'PM' : 'AM';
  }
}
