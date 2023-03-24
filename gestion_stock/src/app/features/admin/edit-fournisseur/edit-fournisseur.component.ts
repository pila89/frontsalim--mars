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
  fournisseurForm!: FormGroup;
  public isRecupereded: boolean = false;
  private idFournisseur: any;
  public data: any;
  constructor(
    private fournisseurService: FournisseurService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.idFournisseur = paramMap.get('id');
      this.fournisseurService
        .getFournisseurById(this.idFournisseur)
        .subscribe((data) => {
          this.isRecupereded = true;
          this.data = data;
          console.log(data
            );

          this.load();
        });
    });
  }
  load() {
    this.fournisseurForm = new FormGroup({
      nom: new FormControl(this.data.nom),
      email: new FormControl(this.data.email),
      telephone: new FormControl(this.data.telephone),
      adresse: new FormControl(this.data.adresse),
      logo: new FormControl(this.data.logo),
    });
  }
  confirmer() {
    const data = this.fournisseurForm?.value;
    this.fournisseurService.updateFournisseur(data).subscribe(() => {
      this.router.navigate(['admin/list-fournisseur']);
    });
  }
  annuler() {
    this.router.navigate(['admin/list-fournisseur']);
  }
}
