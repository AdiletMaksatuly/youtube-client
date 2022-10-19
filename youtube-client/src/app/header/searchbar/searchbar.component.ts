import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  @Output() searched = new EventEmitter();

  searchQuery: string = '';

  onSearch() {
    this.searched.emit(this.searchQuery.toLowerCase());
  }
}
