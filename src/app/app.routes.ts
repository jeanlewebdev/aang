import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CoucouComponent} from "./coucou/coucou.component";
import {BiduleDetailsComponent} from "./bidule-details/bidule-details.component";

export const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'coucou', component:CoucouComponent
  },
  {
    path:'bidule/:id', component:BiduleDetailsComponent,
  }
];
