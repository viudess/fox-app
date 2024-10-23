import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {
  phoneNumbers=[
    {phoneNumber: 'Number'},
    {phoneNumber: 'Number'},
  ]
}
