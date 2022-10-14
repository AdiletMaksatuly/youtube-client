import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon";
import {SearchComponent} from "./search/search.component";
import {SearchResultsComponent} from "./search/search-results/search-results.component";
import {SearchItemComponent} from "./search/search-item/search-item.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {DateHighlightDirective} from "./directives/date-highlight.directive";
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent,

        SearchComponent,
        SearchResultsComponent,
        SearchItemComponent,
        DateHighlightDirective,
        SearchFilterPipe,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
