import { Component, Input, OnInit } from '@angular/core';
import { IRemedy } from '../../../../../models/IRemedy';
import { ActivatedRoute } from '@angular/router';
import { RemedyService } from '../../../../../services/remedy.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrl: './medication.component.css'
})
export class MedicationComponent{
  remedio: IRemedy | null = null;

  constructor(
    private route: ActivatedRoute,
    private remedioService: RemedyService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) {
      console.error('ID inválido:', idParam);
      return;
    }

    const id = String(idParam);

    this.remedioService.getRemedyById(id).subscribe(
      (data) => {
        this.remedio = data;
        console.log('Remédio carregado:', this.remedio);
      },
      (error) => {
        console.error('Erro ao buscar o remédio:', error);
        this.remedio = null;
      }
    );
  }


  deleteRemedy(): void {
    const id = this.remedio?.id;

    if (!id) {
      console.error('ID do remédio não encontrado para deletar');
      return;
    }

    this.remedioService.deleteRemedyById(id).subscribe(
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
