import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { NotifyService } from './notify.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private notifyService: NotifyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the authorization token
    this.notifyService.notifyLoaderVisibility(true);
    const token = localStorage.getItem('auth-token');
    let modifiedReq = req;
    console.log("intercepted");
    if (token) {
      modifiedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("header modified");
    }

    // Handle the request and capture responses or errors
    return next.handle(modifiedReq).pipe(
      tap((event) => {
        // Optionally handle successful responses here
        if (event instanceof HttpResponse) {
          // Handle success
        }
        
      }),
      catchError((error: HttpErrorResponse) => {
        // Handle errors globally (e.g., unauthorized error)
        if (error.status === 401) {
          // Redirect to login page or perform other logic
          this.router.navigate(['/login']);
        }
        // You can further handle other status codes here
        
        return throwError(error);
      }),
      finalize(() =>{
        this.notifyService.notifyLoaderVisibility(false);
      })
    );
  }
}
