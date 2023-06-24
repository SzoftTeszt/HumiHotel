import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { FoglalasokComponent } from './foglalasok/foglalasok.component';

const routes: Routes = [
  {path:"hotel" , component:HotelComponent},
  {path:"foglalasok" , component:FoglalasokComponent},
  {path:"" , component:HotelComponent},
  {path:"**" , component:HotelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
