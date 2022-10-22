import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/video.model';

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
    this.route.paramMap.subscribe((value: ParamMap) => {
      this.id = value.get('id');
    });
  }

  ngOnInit(): void {
    this.getVideo();
  }

  getVideo(): void {
    const gotVideo = this.youtubeService.getVideo(this.id || '');
    gotVideo?.subscribe((video) => {
      this.video = video;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
