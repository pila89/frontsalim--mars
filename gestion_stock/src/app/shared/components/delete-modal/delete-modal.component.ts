import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-delete',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class ConfirmationDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationDeleteComponent>) { }

  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close(true)
  }
 }
