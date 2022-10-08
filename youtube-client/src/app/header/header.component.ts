import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() search = new EventEmitter();

  showFilter: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSearch(searchQuery: string) {
    this.search.emit(searchQuery);
  }
}
