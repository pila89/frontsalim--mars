import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit.model';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confiramtion-modal.component';

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
    // let dialog = this.dialogRef.open(ConfirmationModalComponent, {
    //   width: '400px',
    // // });
    // dialog.afterClosed().subscribe(() => {
      this.produitService.deleteProduitById(idProduit).subscribe(() => {
        this.produitService.getAllProduits().subscribe((data) => {
          this.produits = data;
        });
      });
    // });
  }
}
