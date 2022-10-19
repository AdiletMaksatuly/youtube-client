import { Component } from '@angular/core';
import { FilterType } from './models/filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  searchQuery: string | null = null;

  filterQuery: FilterType = null;

  filterString: string = '';

  showSearchResults(searchQuery: string): void {
    this.searchQuery = searchQuery;
  }

  applyFilter(filterQuery: FilterType): void {
    this.filterQuery = filterQuery;
  }

  setFilterString(filterString: string): void {
    this.filterString = filterString;
  }
}
