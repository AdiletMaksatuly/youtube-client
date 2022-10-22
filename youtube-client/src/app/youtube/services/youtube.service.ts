import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { videos as VIDEOS } from '../mock-videos';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  getVideos(): Observable<Video[]> {
    return of(VIDEOS);
  }

  getVideo(id: string): Observable<Video> | null {
    const foundVideo = VIDEOS.find((video) => video.id === id);
    if (foundVideo) {
      return of(foundVideo);
    }

    return null;
  }
}
