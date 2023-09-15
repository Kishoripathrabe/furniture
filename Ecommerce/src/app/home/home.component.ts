import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   Fbobjs=[
    {pname:'product1',pprice:'10$',pimage:"../../assets/home-outdoor.jpg"},
    {pname:'product2',pprice:'11$',pimage:"../../assets/home-outdoor.jpg"},
    {pname:'product3',pprice:'12$',pimage:"../../assets/home-outdoor.jpg"},
    {pname:'product4',pprice:'13$',pimage:"../../assets/home-outdoor.jpg"},
  ]

}
