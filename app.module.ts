import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButyComponent } from './buty/buty.component';
import { RolinyComponent } from './roliny/roliny.component';
import { MebleComponent } from './meble/meble.component';
import { SkarpetyComponent } from './skarpety/skarpety.component';
import { BluzyComponent } from './bluzy/bluzy.component';
import { SpodnieComponent } from './spodnie/spodnie.component';
import { AgdComponent } from './agd/agd.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LightNightButtonComponent } from './light-night-button/light-night-button.component';
import { WwComponent } from './ww/ww.component';




@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
  NavbarComponent,
  ButyComponent,
  RolinyComponent,
  MebleComponent,
  SkarpetyComponent,
  BluzyComponent,
  SpodnieComponent,
  AgdComponent,
   HomePageComponent,

  LightNightButtonComponent,
  WwComponent,

],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
