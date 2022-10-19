import { Component, Input } from '@angular/core';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() video: Video | undefined;
}
