import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

const apiUrl = 'http://localhost:3000/api/';

export class AppInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      url: this.resolveUrl(req.url)
    });
    return next.handle(modifiedRequest).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            return event;
          }
        },
        (errorResponse: any) => {
          if (errorResponse instanceof HttpErrorResponse) {
            const errorMessage = errorResponse.error.message;
            return throwError(errorMessage);
          }
        }
      )
    );
  }

  private resolveUrl(url: string): string {
    return `${apiUrl}${url}`;
  }
}
