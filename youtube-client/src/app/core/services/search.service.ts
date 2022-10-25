import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
import { FilterType } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery = new BehaviorSubject<string | null>(null);

  private filterQuery = new BehaviorSubject<FilterType>(null);

  private filterString = new BehaviorSubject('');

  getSearchQuery(): Observable<string | null> {
    return this.searchQuery.pipe(
      debounceTime(500),
      filter((value) => {
        return value?.length >= 3;
      }),
      distinctUntilChanged(),
    );
  }

  setSearchQuery(value: string): void {
    this.searchQuery.next(value);
  }

  getFilterQuery(): Observable<FilterType> {
    return this.filterQuery.asObservable();
  }

  setFilterQuery(value: FilterType): void {
    this.filterQuery.next(value);
  }

  getFilterString(): Observable<string> {
    return this.filterString.asObservable();
  }

  setFilterString(value: string): void {
    this.filterString.next(value);
  }
}
