import { Component, Input } from '@angular/core';
import { Video } from '../search/search-item.model';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent {
  @Input() video: Video = {} as Video;
}
