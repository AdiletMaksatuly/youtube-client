export type FilterOrder = 'ascending' | 'descending';

export type FilterType = {
  date: FilterOrder | null;
  countOfViews: FilterOrder | null;
} | null;

export enum FilterTypes {
  DATE = 'date',
  COUNT_OF_VIEWS = 'count_of_views',
}
