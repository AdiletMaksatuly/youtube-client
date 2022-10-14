import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {LogoComponent} from "./components/header/logo/logo.component";
import {SettingsComponent} from "./components/header/settings/settings.component";
import {LoginComponent} from "./components/header/login/login.component";
import {SearchbarComponent} from "./components/header/searchbar/searchbar.component";
import {FilterComponent} from "./components/header/filter/filter.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [HeaderComponent,    LogoComponent,
    SettingsComponent,
    LoginComponent,
    SearchbarComponent,
    FilterComponent,],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,    FormsModule,

  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
