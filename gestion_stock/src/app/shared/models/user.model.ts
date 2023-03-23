import { Role } from './role.model';
import { Fournisseur } from './fournisseur.model';
export class User {
  idUser?: number;
  nom?: string;
  email?: string;
  telephone?: number;
  adresse?: string;
  logo?: string;
  fournisseurs?:Fournisseur[];
  role?:Role;
}
