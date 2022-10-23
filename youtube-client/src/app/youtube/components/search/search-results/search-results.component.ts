import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { YoutubeService } from '../../../services/youtube.service';
import { Video } from '../../../models/video.model';
import { FilterOrder, FilterType } from '../../../../core/models/filter.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges, OnInit {
  @Input() searchQuery$: Observable<string>;

  @Input() filterQuery: FilterType = null;

  @Input() filterString: string = '';

  videos: Video[] = [];

  public error: Error | null;

  constructor(public youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.searchQuery$.subscribe((newSearchQuery) => this.getVideos(newSearchQuery));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if searchQuery is the prop that triggered event, then do not sort
    if (changes['searchQuery']) return;

    this.doSort([...this.videos]);
  }

  getVideos(searchQuery: string): void {
    this.youtubeService.getVideos(searchQuery).subscribe((value) => {
      // if new value came but there is an error from previous request
      if (this.error !== null) this.error = null;

      console.log(value)
      if (value instanceof Error) return (this.error = value);

      return (this.videos = value);
    });
  }

  doSort(videosToSort: Video[]): void {
    if (this.filterQuery?.date) {
      this.sortByDate(videosToSort, this.filterQuery.date);
    }
    if (this.filterQuery?.countOfViews) {
      this.sortByCountOfViews(videosToSort, this.filterQuery.countOfViews);
    }
  }

  sortByDate(videosToSort: Video[], filterOrder: FilterOrder): void {
    this.videos = videosToSort.sort((videoA, videoB) => {
      const videoADate = new Date(videoA.snippet.publishedAt);
      const videoBDate = new Date(videoB.snippet.publishedAt);

      // old date's ms is bigger than earlier date's ms, so when ascending, earlier date with less ms must be before old date. so, difference must be B - A.
      // when descending, vice versa
      return filterOrder === 'ascending' ? +videoBDate - +videoADate : +videoADate - +videoBDate;
    });
  }

  sortByCountOfViews(videosToSort: Video[], filterOrder: FilterOrder): void {
    this.videos = videosToSort.sort((videoA, videoB) => {
      const videoAViews = videoA.statistics.viewCount;
      const videoBViews = videoB.statistics.viewCount;

      return filterOrder === 'ascending'
        ? +videoAViews - +videoBViews
        : +videoBViews - +videoAViews;
    });
  }
}
