import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
    message = [];
    path = 'http://localhost:3000/auth'
    constructor (private http: HttpClient) {}

    registerUser(registerData){ 
        this.http.post<any>( this.path + '/register', registerData).subscribe(res => {
            console.log(registerData)
        })
    }

    loginUser(loginData){ 
        this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
            localStorage.setItem('token', res.token)
        })
    }
}