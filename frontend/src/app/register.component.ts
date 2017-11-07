import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor( private auhtService: AuthService){}
  registerData = {}

  post() {
    this.auhtService.registerUser(this.registerData)
    console.log(this.registerData)
  }
}
