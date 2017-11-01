import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'register',
  template: `
    <mat-card>
      <mat-card-header>
          <mat-card-title>
            <h4>
              Register new user
            </h4>
          </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form>
          <mat-input-container>
            <input [(ngModel)]="registerData.email" name="email" matInput placeholder="email" type="email">
          </mat-input-container>
          <mat-input-container>
            <input [(ngModel)]="registerData.pwd" name="password" matInput placeholder="password" type="password">
          </mat-input-container>
          <button (click)="post()" mat-raised-button color="primary">Register</button>
          </form>
      </mat-card-content>
    </mat-card>
  `
})
export class RegisterComponent {

  constructor( private apiService: ApiService){}
  registerData = {}

  post() {
    this.apiService.sendUserRegistration(this.registerData)
    console.log(this.registerData)
  }
}
