import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Track } from '../track';

@Component({
  selector: 'app-thingsilike',
  templateUrl: './thingsilike.component.html',
  styleUrls: ['./thingsilike.component.css']
})
export class ThingsilikeComponent implements OnInit {

  tracks: Track[] = [];

  constructor(private spotifyService: SpotifyService) { }

  public ngOnInit() {
    this.spotifyService
      .getTopTracks()
      .subscribe(
      (tracks) => {
        console.log(tracks);
        this.tracks = tracks;
      }
      )
  }

}
