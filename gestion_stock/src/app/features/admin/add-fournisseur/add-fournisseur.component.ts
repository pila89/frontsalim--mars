import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/shared/services/fournisseur.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.scss'],
})
export class AddFournisseurComponent implements OnInit {
  public fournisseurForm?: FormGroup<any> | any;

  constructor(
    private fournisseurService: FournisseurService,
    private router: Router
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
    });
  }
  addFournisseur() {
    const data = this.fournisseurForm.value;
    this.fournisseurService.addFournisseur(data).subscribe((data) => {
      this.router.navigate(['admin/list-fournisseurs']);
    });
  }

  cancel() {
    this.router.navigate(['admin/list-fournisseurs']);
  }
}
