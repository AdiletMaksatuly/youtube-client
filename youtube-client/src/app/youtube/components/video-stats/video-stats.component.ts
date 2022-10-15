import { Component, Input } from '@angular/core';
import { Statistics } from '../search/search-item.model';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.scss'],
})
export class VideoStatsComponent {
  @Input() stats: Omit<Statistics, 'favoriteCount'> = {
    viewCount: '',
    likeCount: '',
    commentCount: '',
    dislikeCount: '',
  };

  @Input() isCentered?: boolean = false;
}
