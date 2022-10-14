import { Injectable } from '@angular/core';
import {FilterType} from "../../app.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  searchQuery = new BehaviorSubject<string | null>(null)
  filterQuery = new BehaviorSubject<FilterType>(null);
  filterString = new BehaviorSubject('');

  constructor() { }

  getSearchQuery(): Observable<string | null> {
    return this.searchQuery.asObservable();
  }

  setSearchQuery(value: string) {
    this.searchQuery.next(value);
  }

  getFilterQuery() {
    return this.filterQuery.asObservable();
  }

  setFilterQuery(value: FilterType) {
    this.filterQuery.next(value);
  }

  getFilterString() {
    return this.filterString.asObservable();
  }

  setFilterString(value: string) {
    this.filterString.next(value);
  }
}
