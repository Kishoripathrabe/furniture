import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products:any =[];
  showButton: boolean = false;
  id: any;
  constructor( private productService: ProductService, private router: Router){

  }
  ngOnInit(): void {
    this.productService.fetchProductsData().subscribe((data) => {
      this.products = data;
    })
  }
  singlepage(id:any){
    this.router.navigate(['product','single',id]);
  }
  mouseOver(id: any){
    this.id=id;
  }
  mouseLeave(id:any){
    this.id=null;
  }
}

