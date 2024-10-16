import { Component } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css'
})
export class RadioComponent {
  clicado: boolean = false;

  mudarCor(){
    this.clicado = !this.clicado;
  }
}
