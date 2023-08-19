import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ErrorHandlerService } from "./error-handler.service"
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

constructor(private errorHandler: ErrorHandlerService) { }
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        this.errorHandler.handleError('Client-side error: ' + error.error.message);
      } else {
        this.errorHandler.handleError('Server-side error: ' + error.status + ' - ' + error.statusText);
        }
        return throwError(error);
      })
  );
}
}
