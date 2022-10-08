import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() search = new EventEmitter();

  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    this.search.emit(this.searchQuery.toLowerCase());
  }
}
