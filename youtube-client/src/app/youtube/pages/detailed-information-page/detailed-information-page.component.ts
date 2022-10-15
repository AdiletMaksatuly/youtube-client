import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Video } from '../../components/search/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  id: string | null = null;

  video: Video = {} as Video;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private location: Location,
  ) {
    this.route.url.subscribe((url) => {
      this.id = url[url.length - 1].path;
    });
  }

  ngOnInit() {
    this.getVideo();
  }

  getVideo() {
    const gotVideo = this.youtubeService.getVideo(this.id || '');
    gotVideo?.subscribe((video) => {
      this.video = video;
    });
  }

  goBack() {
    this.location.back();
  }
}
