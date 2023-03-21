import { Router } from '@angular/router';
import { FournisseurService } from './../../zshared/services/fournisseur.service';
import { Fournisseur } from './../../zshared/models/fournisseur.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.scss'],
})
export class ListFournisseurComponent implements OnInit {
  fournisseurs: Fournisseur[] = [];
  constructor(
    private fournisseurService: FournisseurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.upload();
  }
  upload() {
    this.fournisseurService.getAllFournisseurs().subscribe((data) => {
      this.fournisseurs = data;
    });
  }
  addFournisseur() {
    this.router.navigate([`/admin/add-fournisseur`]);
  }
  editFournisseur(idFournisseur: number|undefined) {
    this.router.navigate([`/admin/edit-fournisseur/${idFournisseur}`]);
  }
  deleteFournisseur(idFournisseur: number|undefined) {}
}
