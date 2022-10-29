import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/video.model';
import { YoutubeRouteParams } from '../../models/routes.model';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  id: string | null = null;

  video$: Observable<Video>;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.video$ = this.route.paramMap.pipe(
      switchMap((params) => this.youtubeService.getVideo(params.get(YoutubeRouteParams.ID))),
    );
  }

  goBack(): void {
    this.location.back();
  }
}
