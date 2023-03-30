import { NgModule } from '@angular/core';
import { ToastServiceService } from './toast.service';
import { ToastComponent } from './toast.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [ToastComponent],
  imports: [MatSnackBarModule],
  providers: [ToastServiceService],
  exports: [ToastComponent],
})
export class ToastModule {}
