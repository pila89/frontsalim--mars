import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  public dialogRef?: MatDialogRef<ConfirmationModalComponent>
  constructor() { }

  ngOnInit(): void {
  }
  delete() {
    this.dialogRef?.close(true)
  }
}

