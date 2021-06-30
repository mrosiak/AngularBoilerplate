import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { MemberService } from "./member.service";

@Injectable({providedIn:'root'})
export class AuthInterceptor implements HttpInterceptor {
token:string;
  constructor(public tokenProvider:MemberService) {
    this.token=tokenProvider.token;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    if(this.token !==undefined && this.token !==''){
      const authReq = request.clone({
        headers: request.headers.set('Authorization','Basic '+ this.token)
      });
      return next.handle(authReq);
    }
    return next.handle(request)
  }
}
