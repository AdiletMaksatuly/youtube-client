import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterOrder, FilterType} from "../../../../app.model";

enum FilterTypes {
  DATE = "date",
  COUNT_OF_VIEWS = "count_of_views"
}
type SelectedFilterType = FilterTypes.DATE | FilterTypes.COUNT_OF_VIEWS | null;
type SelectedFilterOrderType = FilterOrder;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  @Output() filtered = new EventEmitter();
  @Output() filteredByString = new EventEmitter();
  selectedFilter: SelectedFilterType = null;
  selectedFilterOrder: SelectedFilterOrderType = 'ascending';

  constructor() { }

  ngOnInit(): void {
  }

  onFilterChange(selectedFilter: SelectedFilterType) {
    console.log(selectedFilter)

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
      }
    }

    this.filtered.emit(filterQuery);
    console.log(filterQuery)
  }

  onFilterOrderChange(selectedFilterOrder: SelectedFilterOrderType) {
    this.selectedFilterOrder = selectedFilterOrder;
    this.onFilterChange(this.selectedFilter);
  }

  onFilterStringChange(filterString: string) {
    console.log(filterString)
    this.filteredByString.emit(filterString);
  }
}
