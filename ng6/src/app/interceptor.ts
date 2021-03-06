import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './services/login.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(public loginservice: LoginService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.loginservice.getToken()}`
            }
        });
        return next.handle(request);
    }
}
