import { Component, EventEmitter, Output } from '@angular/core';
import { IWish } from '../../../models/IWish';

@Component({
  selector: 'app-wishform',
  templateUrl: './wishform.component.html',
  styleUrl: './wishform.component.css'
})
export class WishformComponent {

  @Output() onAddWish = new EventEmitter<IWish>();

  desejo: string = '';
  realizar: string = '';
  observacao: string = '';

  onSubmit() {
    if (!this.desejo) {
      alert('Adicione o nome do medicamento!');
      return;
    }

    const novoDesejo: IWish = {
      titulo: this.desejo,
      realizar: this.realizar,
      observacao: this.observacao
    };

    this.onAddWish.emit(novoDesejo);

    this.desejo = '';
    this.realizar = '';
    this.observacao = '';

  }
}
