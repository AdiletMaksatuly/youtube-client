import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterType} from "../app.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() searched = new EventEmitter();
  @Output() filtered = new EventEmitter();

  showFilter: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSearch(searchQuery: string) {
    this.searched.emit(searchQuery);
  }

  onFilter(filterQuery: FilterType) {
    this.filtered.emit(filterQuery)
  }
}
