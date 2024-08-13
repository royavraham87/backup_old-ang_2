import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoyComponent } from './components/roy/roy.component';
import { MorComponent } from './components/mor/mor.component';
import { AmirComponent } from './components/amir/amir.component';
import { MayComponent } from './components/may/may.component';
import { ItzikComponent } from './components/itzik/itzik.component';

@NgModule({
  declarations: [
    AppComponent,
    RoyComponent,
    MorComponent,
    AmirComponent,
    MayComponent,
    ItzikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
