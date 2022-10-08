import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(dataToFilter: any[], query: string) {
    if(!dataToFilter) return null;
    if(!query) return dataToFilter;

    const lowerCasedQuery = query.toLowerCase();

    return dataToFilter.filter((data) => {
      return JSON.stringify(data).toLowerCase().includes(lowerCasedQuery);
    });
  }
}
