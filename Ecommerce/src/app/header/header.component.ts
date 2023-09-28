import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  homedata: any =[] ;
  constructor(private router: Router, private homeService: HomeService){
  }
  homepage() {
      this.router.navigate(['']);
  }
  aboutpage() {
      this.router.navigate(['about']); 
  }
  productpage() {
      this.router.navigate(['product']); 
  }
  contactpage() {
      this.router.navigate(['contact']); 
  }
  ngOnInit(): void {
    this.homeService.fetchBrandsData().subscribe((data: any) => {
      this.homedata = data;
    })
  }
}
