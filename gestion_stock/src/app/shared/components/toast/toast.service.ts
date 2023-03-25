import { ToastComponent } from './toast.component';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {
  durationInSeconds = 5;
  constructor(private snackBar: MatSnackBar) { }
  openSnackBar() {
    this.snackBar.openFromComponent(ToastComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

