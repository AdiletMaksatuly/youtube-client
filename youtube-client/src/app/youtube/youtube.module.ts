import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./components/search/search.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SearchResultsComponent} from "./components/search/search-results/search-results.component";
import {SearchItemComponent} from "./components/search/search-item/search-item.component";
import {DateHighlightDirective} from "./directives/date-highlight.directive";
import {SearchFilterPipe} from "./pipes/search-filter.pipe";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import {YoutubeRoutingModule} from "./youtube-routing.module";

@NgModule({
  declarations: [SearchComponent, SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    DateHighlightDirective,
    SearchFilterPipe,
    MainPageComponent,
    DetailedInformationPageComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,

  ],
  exports: []
})
export class YoutubeModule { }
