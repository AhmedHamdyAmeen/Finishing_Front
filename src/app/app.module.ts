import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveApartmentComponent } from './components/save-apartment/save-apartment.component';
import { UpdateApartmentComponent } from './components/update-apartment/update-apartment.component';
import { DeleteApartmentComponent } from './components/delete-apartment/delete-apartment.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveApartmentComponent,
    UpdateApartmentComponent,
    DeleteApartmentComponent,
    ApartmentComponent,
    ApartmentDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
