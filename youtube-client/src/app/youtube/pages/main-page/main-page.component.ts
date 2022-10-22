import { Component } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { FilterType } from '../../../core/models/filter.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  searchQuery$: Observable<string | null> = this.searchService.getSearchQuery();

  filterQuery$: Observable<FilterType> = this.searchService.getFilterQuery();

  filterString$: Observable<string> = this.searchService.getFilterString();

  constructor(private searchService: SearchService) {}
}
