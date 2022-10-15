import { Component, OnInit } from '@angular/core';
import { FilterType } from '../../../app.model';
import { SearchService } from '../../services/search.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showFilter: boolean = false;

  isMainPage: boolean = false;

  constructor(private youtubeService: SearchService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;

      this.isMainPage = event.url.includes('main');
    });
  }

  onSearch(searchQuery: string) {
    this.youtubeService.setSearchQuery(searchQuery);
  }

  onFilter(filterQuery: FilterType) {
    this.youtubeService.setFilterQuery(filterQuery);
  }

  onFilteredByString(filterString: string) {
    this.youtubeService.setFilterString(filterString);
  }
}
