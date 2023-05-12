import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LesAmisComponent } from './les-amis/les-amis.component';
import { UnAmiComponent } from './un-ami/un-ami.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TodolistComponent } from './todo-list/todo-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'pokedex', component: PokemonComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LesAmisComponent,
    UnAmiComponent,
    NavBarComponent,
    TodolistComponent,
    PokemonComponent,
    CarouselComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
