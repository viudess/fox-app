import { Component } from '@angular/core';

@Component({
  selector: 'app-customuser',
  templateUrl: './customuser.component.html',
  styleUrl: './customuser.component.css'
})
export class CustomuserComponent {
  sobrecarregado: number | null = null;
  verbal: number | null = null;
  contatoFisico: number | null = null;

  mudarCor(pergunta: number, valor: number) {
    if (pergunta === 0) {
      this.sobrecarregado = this.sobrecarregado === valor ? null : valor;
    } else if (pergunta === 1) {
      this.verbal = this.verbal === valor ? null : valor;
    } else if (pergunta === 2) {
      this.contatoFisico = this.contatoFisico === valor ? null : valor;
    }
  }

}
