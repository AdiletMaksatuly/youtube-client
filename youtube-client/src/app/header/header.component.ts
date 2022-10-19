import { Component, EventEmitter, Output } from '@angular/core';
import { FilterType } from '../models/filter.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searched = new EventEmitter();

  @Output() filtered = new EventEmitter();

  @Output() filteredByString = new EventEmitter();

  showFilter: boolean = false;

  onSearch(searchQuery: string) {
    this.searched.emit(searchQuery);
  }

  onFilter(filterQuery: FilterType) {
    this.filtered.emit(filterQuery);
  }

  onFilteredByString(filterString: string) {
    this.filteredByString.emit(filterString);
  }
}
