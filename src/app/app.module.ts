import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SuperComponent } from './super/super.component';
import { AppComponent } from './app.component';
import { LesAmisComponent } from './les-amis/les-amis.component';
import { UnAmiComponent } from './un-ami/un-ami.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    LesAmisComponent,
    LesAmisComponent,
    UnAmiComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, SuperComponent],
})
export class AppModule {}
