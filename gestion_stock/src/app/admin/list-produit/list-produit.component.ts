import { Produit } from './../../shared/models/produit.model';
import { ProduitService } from './../../shared/services/produit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss'],
})
export class ListProduitComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.load();
  }
  load() {
    this.produitService.getAllProduits().subscribe((data) => {
      this.produits = data;
    });
  }
}
