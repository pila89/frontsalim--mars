import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/shared/services/fournisseur.service';
import { Fournisseur } from 'src/app/shared/models/fournisseur.model';

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
  editFournisseur(idFournisseur: any) {
    this.router.navigate([`admin/edit-fournisseur/${idFournisseur}`]);
  }
  deleteFournisseur(idFournisseur: any) {
    this.fournisseurService
      .deleteFournisseurById(idFournisseur).subscribe(() => {
        this.fournisseurService.getAllFournisseurs().subscribe((data) => {
          this.fournisseurs = data;
        });
      });
  }
}
