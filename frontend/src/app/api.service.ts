import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
    message = [];
    users = [];
    
    constructor (private http: Http) {}

    getMessage(){ 
        this.http.get('http://localhost:3000/posts').subscribe(res => {
            this.message = res.json();
        })
    }
    
    getUsers(){ 
        this.http.get('http://localhost:3000/users').subscribe(res => {
            this.users = res.json();
        })
    }
    
    getProfile(id){ 
        return this.http.get('http://localhost:3000/profile/' + id)
    }
}