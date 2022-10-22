import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { NavigationEnd, Router } from '@angular/router';
import { FilterType } from '../../models/filter.model';
import { YoutubeRoutePaths } from '../../../youtube/models/routes.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFilter: boolean = false;

  isMainPage: boolean = false;

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;

      this.isMainPage = event.urlAfterRedirects.includes(YoutubeRoutePaths.MAIN_PAGE);
    });
  }

  onSearch(searchQuery: string): void {
    this.searchService.setSearchQuery(searchQuery);
  }

  onFilter(filterQuery: FilterType): void {
    this.searchService.setFilterQuery(filterQuery);
  }

  onFilteredByString(filterString: string): void {
    this.searchService.setFilterString(filterString);
  }
}
