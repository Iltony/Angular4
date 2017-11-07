import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'login',
  template: `
    <mat-card>
      <mat-card-header>
          <mat-card-title>
            <h4>
              Profile
            </h4>
          </mat-card-title>
      </mat-card-header>
      <mat-card-content>
      <mat-list>
      <mat-list-item>Name: Tim</mat-list-item>
      </mat-list>
      </mat-card-content>
    </mat-card>
  `
})
export class ProfileComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute){}

  ngOninit(){

      // Take from the current route using the activated route service
      var id = this.route.snapshot.params.id
      this.apiService.getProfile(id).subscribe(profile => {
        console.log(profile)
      })
  }
}
