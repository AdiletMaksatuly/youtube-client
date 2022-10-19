import { Video, PageInfo } from './search-item.model';

export interface IResponseVideo {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Video[];
}
