import { Component, Input } from '@angular/core';
import { VideoStatistics } from '../../models/video.model';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.scss'],
})
export class VideoStatsComponent {
  @Input() stats: Omit<VideoStatistics, 'favoriteCount'> = {
    viewCount: '',
    likeCount: '',
    commentCount: '',
    dislikeCount: '',
  };

  @Input() isCentered?: boolean = false;
}
