import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveApartmentComponent } from './components/save-apartment/save-apartment.component';
import { UpdateApartmentComponent } from './components/update-apartment/update-apartment.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'apartment/save', component: SaveApartmentComponent },
  { path: 'apartment/update', component: UpdateApartmentComponent },
  { path: 'apartment/details', component: ApartmentDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
