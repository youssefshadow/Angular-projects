import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import du module FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule, // Ajout du module FormsModule dans la liste des imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
