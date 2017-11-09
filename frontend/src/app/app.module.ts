import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { MatButtonModule, 
         MatCardModule, 
         MatToolbarModule, 
         MatInputModule, 
         MatListModule } from '@angular/material'

import { FormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ApiService } from './api.service'
import { AuthService } from './auth.service'

import { AppComponent } from './app.component'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.component'
import { ProfileComponent } from './profile.component'
import { PostComponent } from './post.component'

const routes = [
  { path: '', component: PostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'testprofile', component: UsersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent, 
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule, 
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
