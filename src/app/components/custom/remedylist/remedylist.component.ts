import { Component, OnInit } from '@angular/core';
import { RemedyService } from '../../../services/remedy.service';
import { IRemedy } from '../../../models/IRemedy';

@Component({
  selector: 'app-remedylist',
  templateUrl: './remedylist.component.html',
  styleUrl: './remedylist.component.css'
})
export class RemedylistComponent implements OnInit{
  remedios: IRemedy[] = [];

  constructor(private taskService:RemedyService){

  }
  ngOnInit(): void{

    this.taskService.getRemedy().subscribe((dado) => {
      this.remedios = dado;
      console.log(dado);
    });
  }
}
