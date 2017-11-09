import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
    message = [];
    users = [];
    path = 'http://localhost:3000'

    constructor (private http: Http) {}

    getMessage(userId){ 
        var url = this.path + '/posts/' + userId
        this.http.get(url).subscribe(res => {
            this.message = res.json();
        })
    }
    
    postMessage(message){ 
        this.http.post(this.path + '/post', message).subscribe(res => {
        })
    }

    getUsers(){ 
        this.http.get(this.path + '/users').subscribe(res => {
            this.users = res.json();
        })
    }
    
    getProfile(id){ 
        return this.http.get(this.path + '/profile/' + id)
    }
}