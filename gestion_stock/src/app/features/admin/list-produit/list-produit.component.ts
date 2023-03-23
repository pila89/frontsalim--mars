
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit.model';
import { ProduitService } from 'src/app/shared/services/produit.service';

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
