import { Produit } from './produit.model';
export class Fournisseur {
  idFournisseur?: number;
  nom?: string;
  email?: string;
  telephone?: number;
  adresse?: string;
  logo?: string;
  produits?:Produit[]
}
