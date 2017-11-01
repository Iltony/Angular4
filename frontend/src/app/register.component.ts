import { Component } from '@angular/core';
import { AuthService } from './auth.service';

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

  constructor( private auhtService: AuthService){}
  registerData = {}

  post() {
    this.auhtService.registerUser(this.registerData)
    console.log(this.registerData)
  }
}
