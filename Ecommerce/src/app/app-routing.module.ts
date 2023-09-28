import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
},
{
    path:'about', component: AboutComponent 
},
{
    path:'product',children : [
      {path:'', component: ProductComponent},
      {
        path:'single/:id', component: SingleProductComponent
      }
    ]
},
{
    path:'contact', component: ContactComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
