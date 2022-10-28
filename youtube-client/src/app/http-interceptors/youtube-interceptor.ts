import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, URLs } from '../youtube/models/api.model';

export class YoutubeInterceptor implements HttpInterceptor {
  private API_URL = URLs.BASE_URL;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      url: this.API_URL + req.url,
      setParams: { key: API_KEY },
    });

    return next.handle(request);
  }
}
