import { Component } from '@angular/core';
import { IWish } from '../../../../models/IWish';
import { WishService } from '../../../../services/wish.service';

@Component({
  selector: 'app-addwish',
  templateUrl: './addwish.component.html',
  styleUrl: './addwish.component.css'
})
export class AddwishComponent {
  desejos: IWish[] = [];

  constructor(private taskService:WishService){

  }
  ngOnInit(): void{

    this.taskService.getWish().subscribe((dado) => {
      this.desejos = dado;
      console.log(dado);
    });
  }

  AddWish(desejo : IWish){
    this.taskService.AddWish(desejo).subscribe((desejo) => {
      this.desejos.push(desejo)
    })
  }
}
