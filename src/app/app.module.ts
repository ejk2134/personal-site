import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

import {Router} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {SpotifyService} from './spotify.service';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { ProjectsComponent } from './projects/projects.component';
import { ThingsilikeComponent } from './thingsilike/thingsilike.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopTracksComponent,
    ProjectsComponent,
    ThingsilikeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router){
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}