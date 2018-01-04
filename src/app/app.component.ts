import { Component, OnInit } from '@angular/core';
import {SpotifyService} from './spotify.service';
import {Track} from './track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tracks: Track[] = [];

  constructor(private spotifyService: SpotifyService){}

  public ngOnInit(){
    this.spotifyService
      .getTopTracks()
      .subscribe(
        (tracks)=>{
          console.log(tracks);
          this.tracks = tracks;
        }
      )
  }
}
