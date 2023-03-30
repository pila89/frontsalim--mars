import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public menuList = [
    {
      name: 'Gestion des fournisseurs',
      routerLink: 'list-fournisseurs',
    },
    {
      name: 'Gestion des produits',
      routerLink: 'list-produit',
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
