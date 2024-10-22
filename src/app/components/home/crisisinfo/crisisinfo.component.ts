import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crisisinfo',
  templateUrl: './crisisinfo.component.html',
  styleUrl: './crisisinfo.component.css'
})
export class CrisisinfoComponent {
  constructor(public dialogRef: MatDialogRef<CrisisinfoComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
