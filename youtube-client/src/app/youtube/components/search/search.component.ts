import { Component, Input } from '@angular/core';
import { FilterType } from '../../../app.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchQuery: string = '';

  @Input() filterQuery: FilterType = null;

  @Input() filterString: string = '';
}
