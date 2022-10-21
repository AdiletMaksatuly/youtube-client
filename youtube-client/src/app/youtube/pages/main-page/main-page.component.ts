import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { FilterType } from '../../../core/models/filter.model';

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

  getSearchQuery(): void {
    this.youtubeService.getSearchQuery().subscribe((searchQuery) => {
      this.searchQuery = searchQuery;
      return this.searchQuery;
    });
  }

  getFilterQuery(): void {
    this.youtubeService.getFilterQuery().subscribe((filterQuery) => {
      this.filterQuery = filterQuery;
      return this.filterQuery;
    });
  }

  getFilterString(): void {
    this.youtubeService.getFilterString().subscribe((filterString) => {
      this.filterString = filterString;
      return this.filterString;
    });
  }
}
