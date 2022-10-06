import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { LogoComponent } from './header/logo/logo.component';
import { SettingsComponent } from './header/settings/settings.component';
import { LoginComponent } from './header/login/login.component';
import { SearchbarComponent } from './header/searchbar/searchbar.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SettingsComponent,
    LoginComponent,
    SearchbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatInputModule, MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
