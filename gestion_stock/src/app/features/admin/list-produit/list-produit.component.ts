import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit.model';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { ConfirmationDeleteComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss'],
})
export class ListProduitComponent implements OnInit {
  public produits: Produit[] = [];

  public dialogRef!: MatDialog;

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }
  load() {
    this.produitService.getAllProduits().subscribe((data) => {
      this.produits = data;
    });
  }
  updateProduit(idProduit: any) {
    this.router.navigate([`admin/edit-produit/${idProduit}`]);
  }

  deleteProduit(idProduit: any) {
    let dialogRef = this.dialogRef.open(ConfirmationDeleteComponent, {
      height: '195px',
      panelClass: 'custom-modalbox'
    });
    dialogRef.afterClosed().subscribe(()=>{

      this.produitService.deleteProduitById(idProduit).subscribe(() => {
        this.produitService.getAllProduits().subscribe((data) => {
          this.produits = data;
        });
      });

  })}
}
