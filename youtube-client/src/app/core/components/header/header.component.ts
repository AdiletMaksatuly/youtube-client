import { Component } from '@angular/core';
import { FilterType } from '../../../app.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showFilter: boolean = false;

  constructor(private youtubeService: SearchService) {}

  onSearch(searchQuery: string) {
    console.log('search', searchQuery);

    this.youtubeService.setSearchQuery(searchQuery);
  }

  onFilter(filterQuery: FilterType) {
    this.youtubeService.setFilterQuery(filterQuery);
  }

  onFilteredByString(filterString: string) {
    this.youtubeService.setFilterString(filterString);
  }
}
