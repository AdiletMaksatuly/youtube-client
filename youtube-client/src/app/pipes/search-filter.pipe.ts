import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false,
})
export class SearchFilterPipe implements PipeTransform {
  transform(dataToFilter: any[], filterQuery: string, searchQuery: string) {
    if (!dataToFilter) return null;
    if (!filterQuery && !searchQuery) return dataToFilter;

    const lowerCasedQuery = filterQuery ? filterQuery.toLowerCase() : searchQuery.toLowerCase();

    return dataToFilter.filter((data) => {
      return JSON.stringify(data).toLowerCase().includes(lowerCasedQuery);
    });
  }
}
