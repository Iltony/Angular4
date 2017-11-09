import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'userMsg',
  template: `
    <div *ngFor="let message of apiService.message">
        <mat-card>{{message.msg}}</mat-card>
    </div>`,
})
export class MessagesComponent {
  constructor( private apiService: ApiService, private route: ActivatedRoute){}

  ngOnInit(){
    var userId = this.route.snapshot.params.id     
    
    this.apiService.getMessage(userId); 
  }
}
