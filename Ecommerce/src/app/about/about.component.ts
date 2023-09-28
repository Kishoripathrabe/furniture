import { Component, OnInit } from '@angular/core';
import { AboutService } from '../service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about:any;
  constructor(private aboutService: AboutService){}
  ngOnInit(): void {
    this.aboutService.fetchAboutData().subscribe((data) => {
      this.about = data;
    })
  }
} 
