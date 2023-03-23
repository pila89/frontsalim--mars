import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/shared/services/fournisseur.service';

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.scss'],
})
export class EditFournisseurComponent implements OnInit {
  public fournisseurForm?: FormGroup;
  constructor(
    private fournisseurService: FournisseurService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.load();
  }
  load() {
    this.fournisseurForm = new FormGroup({
      idFournisseur: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
      adresse: new FormControl(''),
      logo: new FormControl(''),
      produits: new FormControl(''),
    });
  }

}
