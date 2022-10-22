import { Component, Input } from '@angular/core';
import { FilterType } from '../../../core/models/filter.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchQuery$: Observable<string>;

  @Input() filterQuery: FilterType = null;

  @Input() filterString: string = '';
}
