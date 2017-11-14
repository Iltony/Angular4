import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'

@Injectable()
export class ApiService {
    message = [];
    users = [];
    path = environment.path

    constructor (private http: HttpClient) {}

    getMessage(userId){ 
        var url = this.path + '/posts/' + userId
        this.http.get<any>(url).subscribe(res => {
            this.message = res;
        })
    }
    
    postMessage(message){ 
        this.http.post(this.path + '/post', message).subscribe(res => {
        })
    }

    getUsers(){ 
        this.http.get<any>(this.path + '/users').subscribe(res => {
            this.users = res;
        })
    }
    
    getProfile(id){ 
        return this.http.get(this.path + '/profile/' + id)
    }
}