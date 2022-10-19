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

  onSearch(searchQuery: string): void {
    this.searched.emit(searchQuery);
  }

  onFilter(filterQuery: FilterType): void {
    this.filtered.emit(filterQuery);
  }

  onFilteredByString(filterString: string): void {
    this.filteredByString.emit(filterString);
  }
}
