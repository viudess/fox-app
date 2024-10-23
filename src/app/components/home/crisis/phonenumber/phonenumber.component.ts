import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrl: './phonenumber.component.css'
})
export class PhonenumberComponent {
  @Input() phoneNumber!: string;
}