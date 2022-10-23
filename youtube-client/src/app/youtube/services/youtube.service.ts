import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { SearchListResponse, Video, VideosListResponse } from '../models/video.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { API_KEY } from '../api-key.constant';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private SEARCH_URL = `https://youtube.googleapis.com/youtbube/v3/search`;

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
      })
    );
  }

  getVideos(searchQuery: string): Observable<Video[] | Error> {
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
      .pipe(
        map((response) => response?.items),
        catchError(this.handleError),
      );
  }

  getVideo(id: string): Observable<Video | Error> | null {
    const params = new HttpParams()
      .set('key', API_KEY)
      .set('part', 'snippet,statistics')
      .set('id', id);

    return this.http.get<VideosListResponse>(this.VIDEOS_URL, { params }).pipe(
      map((response) => response.items[0]),
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse): Observable<Error> {
    if (error.status === 0) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
