import { Produit } from 'src/app/shared/models/produit.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss'],
})
export class AddProduitComponent implements OnInit {
  public produitForms?: FormGroup <any>|any;
  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    this.uplod();

  }

uplod (){
  this.produitForms= new FormGroup({
    labelle: new FormControl(''),
    photoface: new FormControl(''),
    quantiteSotock: new FormControl(''),
    prixPromotion: new FormControl(''),
    dateExpiration: new FormControl(''),
    description: new FormControl(''),
    photoProfil:new FormControl(''),
    prix:new FormControl('')

  });
}
confirmer(){
 const data = this.produitForms.value;
this.produitService.addProduit(data).subscribe((data)=>{
this.router.navigate(['admin/list-produit'])
})
};
cancel(){
this.router.navigate(['admin/list-produit'])
};

}
