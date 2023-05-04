import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LesAmisComponent } from './les-amis/les-amis.component';
import { UnAmiComponent } from './un-ami/un-ami.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TodolistComponent } from './todo-list/todo-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    LesAmisComponent,
    UnAmiComponent,
    NavBarComponent,
    TodolistComponent,
    PokemonComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
