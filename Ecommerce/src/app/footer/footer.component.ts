import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    footer: any;
  constructor(private router: Router, private homeService: HomeService){}

  ngOnInit(): void {
  this.homeService.fetchBrandsData().subscribe((data) => {
    this.footer = data;   
  })
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
}
