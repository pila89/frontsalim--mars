import { FormGroup, FormControl } from '@angular/forms';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss'],
})
export class EditProduitComponent implements OnInit {
  produitForm!: FormGroup;
  public data: any;
  private idProduit: any;
  public isOk: Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {

      console.log("3222333333333333333333");

      this.idProduit = paramMap.get('id');
      this.produitService.getProduitById(this.idProduit).subscribe((data) => {
        this.isOk = true;
        this.data = data;

        console.log("2222222222222222");

        this.enitForm();
      });

      console.log("1111111111111111111");
    });
  }
  enitForm() {
    this.produitForm = new FormGroup({
       labelle: new FormControl(this.data.labelle),
      photoface: new FormControl(this.data.photoface),
      quantiteSotock: new FormControl(this.data.quantiteSotock),
      prixPromotion: new FormControl(this.data.prixPromotion),
      dateExpiration: new FormControl(this.data.dateExpiration),
      description: new FormControl(this.data.description),
      photoProfil: new FormControl(this.data.photoProfil),
      prix: new FormControl(this.data.prix),
    });
    console.log(this.produitForm);
  }
  update() {
    const data = this.produitForm?.value;
    this.produitService.updateProduit(data).subscribe(() => {
      this.router.navigate(['admin/list-produit']);
    });
  }
  cancel() {
    this.router.navigate(['admin/list-produit']);
  }
}
