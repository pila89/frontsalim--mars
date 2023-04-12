import { Fournisseur } from 'src/app/shared/models/fournisseur.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FournisseurService } from 'src/app/shared/services/fournisseur.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-fournisseur',
  templateUrl: './table-fournisseur.component.html',
  styleUrls: ['./table-fournisseur.component.scss'],
})
export class TableFournisseurComponent implements OnInit {
  displayedColumns: string[] = [
    'nom',
    'email',
    'telephone',
    'adresse',
    'logo',
    'action',
  ];
   public fournisseurs!: Fournisseur[];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private fournisseurService: FournisseurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.upload();
  }
  upload() {
    // this.fournisseurService.getAllFournisseurs().subscribe((data) => {
    //   console.log(data
    //     );

    //   this.dataSource = new MatTableDataSource(data);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.matSort;
    //   this.fournisseurs = data;
    // });
  }
  editFournisseur(idFournisseur: any) {
    this.router.navigate([`admin/edit-fournisseur/${idFournisseur}`]);
  }

   deleteFournisseur(idFournisseur: any) {
     this.fournisseurService
       .deleteFournisseurById(idFournisseur)
       .subscribe(() => {
         this.fournisseurService.getAllFournisseurs().subscribe((data) => {
           this.fournisseurs = data;
         });
       });
   }
  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

}
