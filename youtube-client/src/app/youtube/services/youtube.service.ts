import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { SearchListResponse, Video, VideosListResponse } from '../models/video.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { URLs } from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private SEARCH_LIST_URL = URLs.SEARCH_LIST;

  private VIDEOS_LIST_URL = URLs.VIDEOS_LIST;

  constructor(private http: HttpClient) {}

  getVideoIDs(searchQuery: string): Observable<string> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('maxResults', 10)
      .set('q', searchQuery);

    return this.http.get<SearchListResponse>(this.SEARCH_LIST_URL, { params }).pipe(
      map((response) => {
        return response?.items.map((video) => video.id.videoId).join(',');
      }),
    );
  }

  getVideos(searchQuery: string): Observable<Video[] | Error> {
    return this.getVideoIDs(searchQuery)
      .pipe(
        switchMap((IDs) => {
          const videosListParams = new HttpParams()
            .set('part', 'snippet,statistics')
            .set('id', IDs);

          return this.http.get<VideosListResponse>(this.VIDEOS_LIST_URL, {
            params: videosListParams,
          });
        }),
      )
      .pipe(
        map((response) => response?.items),
        catchError(this.handleError),
      );
  }

  getVideo(id: string): Observable<Video | Error> | null {
    const params = new HttpParams().set('part', 'snippet,statistics').set('id', id);

    return this.http.get<VideosListResponse>(this.VIDEOS_LIST_URL, { params }).pipe(
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
