import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss'],
})
export class SuperAdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public menuList = [
    {
      name: 'Gestion des users',
      routerLink: 'user-table',
    },
  ];
}
