import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/video.model';

@Pipe({
  name: 'searchFilter',
  pure: false,
})
export class SearchFilterPipe implements PipeTransform {
  transform(dataToFilter: Video[], filterQuery: string, searchQuery: string): Video[] | null {
    if (!dataToFilter) return null;
    if (!filterQuery && !searchQuery) return dataToFilter;

    const lowerCasedQuery: string = filterQuery
      ? filterQuery.toLowerCase()
      : searchQuery.toLowerCase();

    return dataToFilter.filter((data) => {
      return JSON.stringify(data).toLowerCase().includes(lowerCasedQuery);
    });
  }
}
