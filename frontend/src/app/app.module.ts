import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { MatButtonModule, 
         MatCardModule, 
         MatToolbarModule, 
         MatInputModule } from '@angular/material'

import { FormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ApiService } from './api.service'
import { AppComponent } from './app.component'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'

const routes = [
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent, 
    RegisterComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule, 
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
