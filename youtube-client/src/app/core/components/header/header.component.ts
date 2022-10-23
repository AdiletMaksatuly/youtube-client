import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
import { FilterType } from '../../models/filter.model';
import { LoginService } from '../../../auth/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showFilter: boolean = false;

  isLoggedIn: Observable<boolean> = this.loginService.isLoggedIn;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private loginService: LoginService,
  ) {}

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
