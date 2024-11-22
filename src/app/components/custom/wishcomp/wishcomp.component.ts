import { Component, Input } from '@angular/core';
import { IWish } from '../../../models/IWish';

@Component({
  selector: 'app-wishcomp',
  templateUrl: './wishcomp.component.html',
  styleUrl: './wishcomp.component.css'
})
export class WishcompComponent {
  @Input() desejo!: IWish
}
