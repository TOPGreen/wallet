import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class UrlHttpInterceptor implements UrlHttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const host = req.clone({
      url: req.url.replace(/(?<=http:\/\/)[\w,:]+\/*/, 'localhost:3000/')
    });
    return next.handle(host);
  }
}
