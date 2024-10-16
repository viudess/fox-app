import { Component } from '@angular/core';

@Component({
  selector: 'app-daybuttom',
  templateUrl: './daybuttom.component.html',
  styleUrl: './daybuttom.component.css'
})
export class DaybuttomComponent {
  clicado: number | null = null;

  mudarCor(index: number) {
    if (this.clicado === index) {
      this.clicado = null;
    } else {
      this.clicado = index;
    }
  }
}
