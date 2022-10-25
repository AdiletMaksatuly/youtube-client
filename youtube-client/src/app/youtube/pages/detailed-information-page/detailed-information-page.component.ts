import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/video.model';
import { YoutubeRouteParams } from '../../models/routes.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent {
  id: string | null = null;

  private videoSubject = new BehaviorSubject<Video>(null);

  video$ = this.videoSubject.asObservable();

  error: Error | null;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private location: Location,
  ) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get(YoutubeRouteParams.ID);

      this.youtubeService.getVideo(this.id).subscribe((value) => {
        if (this.error !== null) this.error = null;

        if (value instanceof Error) return (this.error = value);

        return this.videoSubject.next(value);
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
