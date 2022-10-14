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

@NgModule({
  declarations: [SearchComponent, SearchComponent,
    SearchResultsComponent,
    SearchItemComponent,
    DateHighlightDirective,
    SearchFilterPipe,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,

  ],
  exports: [SearchComponent]
})
export class YoutubeModule { }
