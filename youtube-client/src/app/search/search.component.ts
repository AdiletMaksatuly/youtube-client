import {Component, Input, OnInit} from '@angular/core';
import {FilterType} from "../app.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() searchQuery: string = '';
  @Input() filterQuery: FilterType = null;

  constructor() {}

  ngOnInit(): void {}
}
