import { Component } from '@angular/core';
import {FilterType} from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'youtube-client';
  searchQuery: string | null = null;
  filterQuery: FilterType = null;

  showSearchResults(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  applyFilter(filterQuery: FilterType) {
    this.filterQuery = filterQuery;
  }
}
