import { Component } from '@angular/core';

@Component({
  selector: 'app-customuserprof',
  templateUrl: './customuserprof.component.html',
  styleUrl: './customuserprof.component.css'
})
export class CustomuserprofComponent {
  sobrecarregado: number | null = null;
  verbal: number | null = null;
  contatoFisico: number | null = null;
  semi: number | null = null;

  mudarCor(pergunta: number, valor: number) {
    if (pergunta === 0) {
      this.sobrecarregado = this.sobrecarregado === valor ? null : valor;
    } else if (pergunta === 1) {
      this.verbal = this.verbal === valor ? null : valor;
    } else if (pergunta === 2) {
      this.contatoFisico = this.contatoFisico === valor ? null : valor;
    } else if (pergunta === 3) {
      this.semi = this.semi === valor ? null : valor;
    }
  }
}
