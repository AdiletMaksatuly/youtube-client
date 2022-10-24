import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from './youtube-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true },
];
