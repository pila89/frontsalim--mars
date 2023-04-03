import { Observable } from 'rxjs';

import { Fournisseur } from './../models/fournisseur.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService {
  constructor(private httpClient: HttpClient) {}

  addFournisseur(fournisseur?: Fournisseur): Observable<Fournisseur> {
    return this.httpClient.post<Fournisseur>(
      `http://localhost:8080/fournisseurs/addFournisseur `,
      fournisseur
    );
  }

  getAllFournisseurs(): Observable<Fournisseur[]> {
   return this.httpClient.get<Fournisseur[]>(
      `http://localhost:8080/fournisseurs/getAllFournisseurs`
    );
  }

  getFournisseurById(idFournisseur: number): Observable<Fournisseur> {
    return this.httpClient.get<Fournisseur>(
      `http://localhost:8080/fournisseurs/getFournisseur/${idFournisseur}`
    );
  }

  deleteFournisseurById(idFournisseur: number){
    return this.httpClient.delete(`http://localhost:8080/fournisseurs/delete/${idFournisseur}`);
  }

  updateFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.httpClient.put(
      `http://localhost:8080/fournisseurs/update`,
      fournisseur
    );
  }

  getFournisseurByName(nom: string): Observable<Fournisseur> {
    return this.httpClient.get(
      `http://localhost:8080/fournisseurs/getFournisseurByNom/${nom}`
    );
  }
}
