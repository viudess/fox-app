import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrisisinfoComponent } from '../crisisinfo/crisisinfo.component';

@Component({
  selector: 'app-crisisbuttom',
  templateUrl: './crisisbuttom.component.html',
  styleUrl: './crisisbuttom.component.css'
})
export class CrisisbuttomComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CrisisinfoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
