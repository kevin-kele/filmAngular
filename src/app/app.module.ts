import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilmsComponent } from './components/films/films.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpComponent } from './pop-up/pop-up.component';
import { TopFilmComponent } from './top-film/top-film.component';
import { TopRealisateurComponent } from './top-realisateur/top-realisateur.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmsComponent,
    PopUpComponent,
    TopFilmComponent,
    TopRealisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
