import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
    message = [];

    constructor (private http: Http) {}

    getMessage(){ 
        this.http.get('http://localhost:3000/posts').subscribe(res => {
            this.message = res.json();
        })
    }

    sendUserRegistration(registerData){ 
        this.http.post('http://localhost:3000/register', registerData).subscribe(res => {

        })
    }

    loginUser(loginData){ 
        // this.http.post('http://localhost:3000/register', registerData).subscribe(res => {

        // })
    }
}