import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InvestComponent } from './invest/invest.component';
import { ServicesComponent } from './services/services.component';
import { TravelComponent } from './travel/travel.component';
const routes: Routes = [
  {path:"services",component:ServicesComponent},
  {path:"about",component:AboutComponent},
  {path:"",component:AboutComponent},
  {path:"products",component:InvestComponent},
  {path:"travel",component:TravelComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
