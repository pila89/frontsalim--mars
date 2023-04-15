import { Product } from './../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/services/store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories$?: Observable<any>;
  products: any;
  selectedCategorie:any
  displayType?:string= "view_list";
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    // this.storeService.getAllCategories().subscribe((data) => {
    //   this.categories = data;
    // });
    this.categories$ = this.storeService.getAllCategories();
    this.storeService.getAllProducts(12).subscribe((data) => {
      this.products = data;
    });
  }

  sort(type: any) {
    let products = this.products
    if (type == 'desc') {
      this.products = products.sort((a:any,b:any) => a.price - b.price)
    } else {
      const sortedproducts: any = products.sort((a:any,b:any) => a.price - b.price);
      this.products = sortedproducts.reverse();
    }

  }
  show(numberItem:number){
    this.storeService.getAllProducts(numberItem).subscribe((data) => {
      this.products = data;
    });
  }

  filter(categorie:string){
    // this.selectedCategorie = categorie
    this.storeService.getAllProducts(36,).subscribe((data) => {
      this.products = data;
    });
  }
  display(type:string){
this.displayType=type
  }

}
