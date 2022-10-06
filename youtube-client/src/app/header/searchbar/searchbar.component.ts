import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();

  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.formSubmit.emit();
  }
}
