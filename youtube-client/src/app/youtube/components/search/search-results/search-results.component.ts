import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Video } from '../search-item.model';
import { FilterOrder, FilterType } from '../../../../app.model';
import { YoutubeService } from '../../../services/youtube.service';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges, OnInit {
  @Input() searchQuery: string = '';

  @Input() filterQuery: FilterType = null;

  @Input() filterString: string = '';

  videos: Video[] = [];

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.getVideos();
  }

  ngOnChanges(changes: SimpleChanges) {
    // if searchQuery is the prop that triggered event, then do not sort
    if (changes['searchQuery']) return;

    this.doSort(this.videos);
  }

  getVideos(): void {
    this.youtubeService.getVideos().subscribe((videos) => (this.videos = videos));
  }

  doSort(videosToSort: Video[]) {
    if (this.filterQuery?.date) {
      this.sortByDate(videosToSort, this.filterQuery.date);
    }
    if (this.filterQuery?.countOfViews) {
      this.sortByCountOfViews(videosToSort, this.filterQuery.countOfViews);
    }
  }

  sortByDate(videosToSort: Video[], filterOrder: FilterOrder) {
    this.videos = videosToSort.sort((videoA, videoB) => {
      const videoADate = new Date(videoA.snippet.publishedAt);
      const videoBDate = new Date(videoB.snippet.publishedAt);

      // old date's ms is bigger than earlier date's ms, so when ascending, earlier date with less ms must be before old date. so, difference must be B - A.
      // when descending, vice versa
      return filterOrder === 'ascending' ? +videoBDate - +videoADate : +videoADate - +videoBDate;
    });
  }

  sortByCountOfViews(videosToSort: Video[], filterOrder: FilterOrder) {
    this.videos = videosToSort.sort((videoA, videoB) => {
      const videoAViews = videoA.statistics.viewCount;
      const videoBViews = videoB.statistics.viewCount;

      return filterOrder === 'ascending'
        ? +videoAViews - +videoBViews
        : +videoBViews - +videoAViews;
    });
  }
}
