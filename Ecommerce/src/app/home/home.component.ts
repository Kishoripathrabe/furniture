import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   homeobj:any = [];
  category: any;
   constructor( private homeService: HomeService){

}
ngOnInit(): void {
  this.homeService.fetchBrandsData().subscribe((data) => {
    console.log("🚀 ~ file: home.component.ts:17 ~ HomeComponent ~ this.homeService.fetchBrandsData ~ data:", data)
    this.homeobj = data;
    this.category=data.categories;
    
  })

}
}

