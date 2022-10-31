import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { YoutubeService } from '../../../services/youtube.service';
import { Video } from '../../../models/video.model';
import { FilterOrder, FilterType } from '../../../../core/models/filter.model';
import { map, Observable } from 'rxjs';
import * as YoutubeActions from '../../../redux/actions/youtube.actions';
import { Store } from '@ngrx/store';
import { selectLoadingStatus, selectVideos } from '../../../redux/selectors/youtube.selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges, OnInit {
  @Input() searchQuery$: Observable<string>;

  @Input() filterQuery: FilterType = null;

  @Input() filterString: string = '';

  isLoading$ = this.store.select(selectLoadingStatus);

  videos$ = this.store.select(selectVideos);

  isNotFound: boolean;

  constructor(private youtubeService: YoutubeService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(YoutubeActions.fetchVideos());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery$']) return;

    this.videos$ = this.videos$?.pipe(
      map((videos) => {
        return this.doSort([...videos]);
      }),
    );
  }

  doSort(videosToSort: Video[]): Video[] {
    if (this.filterQuery?.date) {
      return this.sortByDate(videosToSort, this.filterQuery.date);
    }
    if (this.filterQuery?.countOfViews) {
      return this.sortByCountOfViews(videosToSort, this.filterQuery.countOfViews);
    }

    return videosToSort;
  }

  sortByDate(videosToSort: Video[], filterOrder: FilterOrder): Video[] {
    return videosToSort.sort((videoA, videoB) => {
      const videoADate = new Date(videoA.snippet.publishedAt);
      const videoBDate = new Date(videoB.snippet.publishedAt);

      // old date's ms is bigger than earlier date's ms, so when ascending, earlier date with less ms must be before old date. so, difference must be B - A.
      // when descending, vice versa
      return filterOrder === 'ascending' ? +videoBDate - +videoADate : +videoADate - +videoBDate;
    });
  }

  sortByCountOfViews(videosToSort: Video[], filterOrder: FilterOrder): Video[] {
    return videosToSort.sort((videoA, videoB) => {
      const videoAViews = videoA.statistics.viewCount;
      const videoBViews = videoB.statistics.viewCount;

      return filterOrder === 'ascending'
        ? +videoAViews - +videoBViews
        : +videoBViews - +videoAViews;
    });
  }
}
