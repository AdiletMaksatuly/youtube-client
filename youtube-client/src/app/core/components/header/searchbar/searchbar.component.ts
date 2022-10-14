import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() searched = new EventEmitter();

  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    this.searched.emit(this.searchQuery.toLowerCase());
  }
}
