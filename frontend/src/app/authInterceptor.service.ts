import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    intercept(req, next) {
        var authRequest = req.clone({

            headers: req.headers.set('Authorization', 'token ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTAzZDFmMDZmZDMxZDBjYjBjZDU3ZDMifQ.aPuYOZC5i5aBCvmjbXgxyQ6-XU5pxPmKBnlWHjFdof4')
        })

        return next.handle(authRequest)
    }
}