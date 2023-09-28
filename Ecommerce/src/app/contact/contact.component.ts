import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: any;
 pNo:any;

  constructor(){
    this.contact = new FormGroup({
      "email" : new FormControl('',[Validators.required,Validators.email]),
      "phone" : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
    })
  }


  onSubmit() {
    console.warn("sent");
  }
}

