import { Component, Input } from '@angular/core';
import { IWish } from '../../../models/IWish';
import { WishService } from '../../../services/wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  desejos: IWish[] = [];

  constructor(private taskService:WishService){

  }
  ngOnInit(): void{

    this.taskService.getWish().subscribe((dado) => {
      this.desejos = dado;
      console.log(dado);
    });
  }
}
