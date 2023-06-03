import { Injectable } from "@angular/core"
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators'
import { LoadingService } from '../services/loading.service'

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    private count = 0;

    constructor(
        private _loading: LoadingService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.count === 0) {
            this._loading.setHttpProgressStatus(true)
        }
        this.count++
        return next.handle(req).pipe(
            finalize(() => {
                this.count--;
                if(this.count === 0) {
                    this._loading.setHttpProgressStatus(false)
                }
            })
        )
    }
}