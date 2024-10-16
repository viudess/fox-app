import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotion.component.html',
  styleUrl: './emotion.component.css'
})
export class EmotionComponent {
  @Input() title!: string;
  @Input() image!: string;
  clicado = false;

  mudarCor(){
    this.clicado = !this.clicado;
  }
}
