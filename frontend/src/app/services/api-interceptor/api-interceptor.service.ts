import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((err:any, caught: Observable<HttpEvent<any>>) => {
          if (err instanceof HttpErrorResponse && err.status == 401) {
            console.log('err',err);
            this.router.navigate(['login'], { queryParams: { returnUrl: request.url } });
            return of(err as any);
          }
          throw err;
        })
      );
  }
}