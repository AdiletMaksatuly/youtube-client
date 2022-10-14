import { Component, OnInit } from '@angular/core';
import { FilterType } from '../../../app.model';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  searchQuery: string | null = null;

  filterQuery: FilterType = null;

  filterString: string = '';

  constructor(private youtubeService: SearchService) {}

  ngOnInit(): void {
    this.getSearchQuery();
    this.getFilterQuery();
    this.getFilterString();
  }

  getSearchQuery() {
    this.youtubeService.getSearchQuery().subscribe((searchQuery) => {
      console.log(this.searchQuery);
      this.searchQuery = searchQuery;
      console.log(this.searchQuery);
      return this.searchQuery;
    });
  }

  getFilterQuery() {
    this.youtubeService.getFilterQuery().subscribe((filterQuery) => {
      this.filterQuery = filterQuery;
      return this.filterQuery;
    });
  }

  getFilterString() {
    this.youtubeService.getFilterString().subscribe((filterString) => {
      this.filterString = filterString;
      return this.filterString;
    });
  }
}
