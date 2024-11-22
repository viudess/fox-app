import { Component } from '@angular/core';
import { IWish } from '../../../../../models/IWish';
import { ActivatedRoute } from '@angular/router';
import { WishService } from '../../../../../services/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  desejo: IWish | null = null;

  constructor(
    private route: ActivatedRoute,
    private remedioService: WishService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) {
      console.error('ID inválido:', idParam);
      return;
    }

    const id = String(idParam);

    this.remedioService.getWishById(id).subscribe(
      (data) => {
        this.desejo = data;
        console.log('Remédio carregado:', this.desejo);
      },
      (error) => {
        console.error('Erro ao buscar o remédio:', error);
        this.desejo = null;
      }
    );
  }


  deleteWish(): void {
    const id = this.desejo?.id;

    if (!id) {
      console.error('ID do remédio não encontrado para deletar');
      return;
    }

    this.remedioService.deleteWishById(id).subscribe(
      () => {
        console.log('Remédio deletado com sucesso');
        window.history.back();
      },
      (error) => {
        console.error('Erro ao deletar o remédio:', error);
      }
    );
  }
}
