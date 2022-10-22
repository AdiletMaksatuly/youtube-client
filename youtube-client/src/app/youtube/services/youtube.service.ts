import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { SearchListResponse, Video, VideosListResponse } from '../models/video.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_KEY } from '../api-key.constant';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search`;

  private VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';

  constructor(private http: HttpClient) {}

  getVideoIDs(searchQuery: string): Observable<string> {
    const params = new HttpParams()
      .set('key', API_KEY)
      .set('type', 'video')
      .set('maxResults', 10)
      .set('q', searchQuery);

    return this.http.get<SearchListResponse>(this.SEARCH_URL, { params }).pipe(
      map((response) => {
        return response?.items.map((video) => video.id.videoId).join(',');
      }),
    );
  }

  getVideos(searchQuery: string): Observable<Video[]> {
    return this.getVideoIDs(searchQuery)
      .pipe(
        switchMap((IDs) => {
          const params = new HttpParams()
            .set('key', API_KEY)
            .set('part', 'snippet,statistics')
            .set('id', IDs);

          return this.http.get<VideosListResponse>(this.VIDEOS_URL, { params });
        }),
      )
      .pipe(map((response) => response?.items));
  }

  getVideo(id: string): Observable<Video> | null {
    const params = new HttpParams();
    params.set('key', API_KEY);
    params.set('part', 'snippet,statistics');
    params.set('id', id);

    return this.http.get<Video>(this.VIDEOS_URL, { params });
  }
}
