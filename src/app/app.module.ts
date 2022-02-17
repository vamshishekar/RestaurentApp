import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './video/video.component';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { YouTubePlayerModule } from '@angular/youtube-player';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    YouTubePlayerModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
