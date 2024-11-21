import { Component, OnInit } from '@angular/core';
import { IRemedy } from '../../../../models/IRemedy';
import { RemedyService } from '../../../../services/remedy.service';

@Component({
  selector: 'app-addmedication',
  templateUrl: './addmedication.component.html',
  styleUrl: './addmedication.component.css'
})
export class AddmedicationComponent implements OnInit{
  remedios: IRemedy[] = [];

  constructor(private taskService:RemedyService){

  }
  ngOnInit(): void{

    this.taskService.getRemedy().subscribe((dado) => {
      this.remedios = dado;
      console.log(dado);
    });
  }

  AddRemedy(remedio : IRemedy){
    this.taskService.AddRemedy(remedio).subscribe((remedio) => {
      this.remedios.push(remedio)
    })
  }
}
