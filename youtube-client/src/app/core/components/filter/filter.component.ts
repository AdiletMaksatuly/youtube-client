import { Component, EventEmitter, Output } from '@angular/core';
import { FilterOrder, FilterType, FilterTypes } from 'src/app/core/models/filter.model';

type SelectedFilterType = FilterTypes.DATE | FilterTypes.COUNT_OF_VIEWS | null;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() filtered = new EventEmitter();

  @Output() filteredByString = new EventEmitter();

  selectedFilter: SelectedFilterType = null;

  selectedFilterOrder: FilterOrder = 'ascending';

  onFilterChange(selectedFilter: SelectedFilterType): void {
    this.selectedFilter = selectedFilter;
    let filterQuery: FilterType = null;

    if (selectedFilter === FilterTypes.DATE) {
      filterQuery = {
        date: this.selectedFilterOrder,
        countOfViews: null,
      };
    }

    if (selectedFilter === FilterTypes.COUNT_OF_VIEWS) {
      filterQuery = {
        countOfViews: this.selectedFilterOrder,
        date: null,
      };
    }

    this.filtered.emit(filterQuery);
  }

  onFilterOrderChange(selectedFilterOrder: FilterOrder): void {
    this.selectedFilterOrder = selectedFilterOrder;
    this.onFilterChange(this.selectedFilter);
  }

  onFilterStringChange(filterString: string): void {
    this.filteredByString.emit(filterString);
  }
}
