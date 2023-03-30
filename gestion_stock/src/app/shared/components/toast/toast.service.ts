import { ToastComponent } from './toast.component';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ToastServiceService {
  durationInSeconds = 5;
  constructor(private snackBar: MatSnackBar) { }
  openSnackBar(message:string) {
    this.snackBar.openFromComponent(ToastComponent, {
      duration: this.durationInSeconds * 1000,
      data:message
    });
  }
}

