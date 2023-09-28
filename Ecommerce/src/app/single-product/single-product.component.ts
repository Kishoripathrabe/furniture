import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  data: any = [];
  imageData: any;
  button1Active: boolean = true;
  button2Active: boolean = false;
  starRating = 4; 
      constructor( private route:ActivatedRoute, private productService: ProductService){

      }
  ngOnInit(): void {
    const idFromUrl = this.route.snapshot.paramMap.get('id');
    this.productService.fetchProductsData().subscribe(res => {
      this.data = res;
      this.imageData = this.data.filter((image: any) => image.id === idFromUrl);
    })
  }
  toggleButton(button: number): void {
    if (button === 1) {
      this.button1Active = !this.button1Active;
      this.button2Active = false;
    } else if (button === 2) {
      this.button1Active = false;
      this.button2Active = !this.button2Active;
    }
  }
}
