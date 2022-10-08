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
import { FilterComponent } from './header/filter/filter.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {SearchComponent} from "./search/search.component";
import {SearchResultsComponent} from "./search/search-results/search-results.component";
import {SearchItemComponent} from "./search/search-item/search-item.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DateHighlightDirective} from "./directives/date-highlight.directive";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        SettingsComponent,
        LoginComponent,
        SearchbarComponent,
        FilterComponent,
        SearchComponent,
        SearchResultsComponent,
        SearchItemComponent,
        DateHighlightDirective,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
