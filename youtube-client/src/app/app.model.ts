export type FilterOrder = 'ascending' | 'descending';

export type FilterType = {
  date: FilterOrder | null;
  countOfViews: FilterOrder | null;
} | null;
