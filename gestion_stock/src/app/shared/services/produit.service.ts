import { Observable } from 'rxjs';
import { Produit } from './../models/produit.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private httpClient: HttpClient) {}

  addProduit(produit: Produit): Observable<Produit> {
    return this.httpClient?.post<Produit>(
      `http://localhost:8080/produits/addProduit`,
      produit
    );
  }

  addProduitToFournisseur(
    produit: Produit,
    idFournisseur: number
  ): Observable<Produit> {
    return this.httpClient?.post<Produit>(
      `http://localhost:8080/produits/addProduitToFournisseur/${idFournisseur}`,
      produit
    );
  }
  getAllProduits(): Observable<Produit[]> {
    return this.httpClient?.get<Produit[]>(
      `http://localhost:8080/produits/getAllProduits`
    );
  }
  getProduitById(id: number): Observable<Produit> {
    return this.httpClient?.get<Produit>(
      `http://localhost:8080/produits/prouduit/${id}`
    );
  }
}
