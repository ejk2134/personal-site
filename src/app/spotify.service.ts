import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

import {Http, Response} from '@angular/http';
import {Track} from './track';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

const apiUrl = environment.apiUrl;

@Injectable()
export class SpotifyService {

  constructor(private http: Http){}

  public getTopTracks(): Observable<Track[]>{
    return this.http
      .get(apiUrl + '/spotify')
      .map(response => {
        const topTracks = response.json();
        let rank = 0;
        console.log(topTracks);
        //create a Track object for each object in response
        return topTracks.map((track) => {
          rank++;
          let artists = [];
          //get names from artists attribute in object
          for (let i = 0; i < track.artists.length; i++){
            console.log(track.artists[i])
            artists.push(track.artists[i].name);
          }
          return new Track({
            rank: rank,
            title: track.name,
            artists: artists,
            albumArt: track.album.images[2].url
          });
        })
      })
    }
  }
