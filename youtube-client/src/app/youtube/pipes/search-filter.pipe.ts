import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../components/search/search-item.model';

@Pipe({
  name: 'searchFilter',
  pure: false,
})
export class SearchFilterPipe implements PipeTransform {
  transform(dataToFilter: Video[], searchQuery: string, filterQuery: string) {
    if (!dataToFilter) return null;

    // if neither searchQuery nor filterQuery weren't provided;
    if (!searchQuery && !filterQuery) return dataToFilter;

    // if both searchQuery and filterQuery provided
    if (searchQuery && filterQuery) {
      const filteredBySearchQuery = this.filterByString(dataToFilter, searchQuery);

      return this.filterByString(filteredBySearchQuery, filterQuery);
    }

    // if only searchQuery provided
    if (searchQuery) {
      return this.filterByString(dataToFilter, searchQuery);
    }

    // if only filterQuery provided
    return this.filterByString(dataToFilter, filterQuery);
  }

  filterByString(dataToFilter: Video[], string: string) {
    return dataToFilter.filter((data) => {
      return data.snippet.title.toLowerCase().includes(string);
    });
  }
}
