import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],

})
export class DashboardComponent {
  @Input() menuList:any;


  constructor() {}


}
