import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterType } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchQuery = new BehaviorSubject<string | null>(null);

  filterQuery = new BehaviorSubject<FilterType>(null);

  filterString = new BehaviorSubject('');

  getSearchQuery(): Observable<string | null> {
    return this.searchQuery.asObservable();
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
