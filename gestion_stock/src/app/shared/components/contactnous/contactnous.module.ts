import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ContactnousComponent } from "./contactnous.component";


@NgModule({
  declarations: [ContactnousComponent],
  imports: [RouterModule],
  providers: [],

  exports: [ContactnousComponent],
})
export class PageModule {}
