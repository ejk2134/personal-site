const express = require('express');
const router = express.Router();

const request = require('request');
const rp = require('request-promise');
const SpotifyWebAPI = require('spotify-web-api-node')

router.get('/', (req, res)=>{
    console.log('Spotify request');
    //spotify client credentials
    let auth = 'Basic ' + new Buffer(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64');

    // options for access token request
    let options = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        form: {
            grant_type: 'refresh_token',
            refresh_token: process.env.SPOTIFY_AUTH_CODE
        },
        headers: {
            authorization: auth
        },
        json: true
    }
    //access token request
    rp(options)
        .then((parsedBody) => {
            console.log('.then');
            console.log(parsedBody);
            let accessToken = parsedBody.access_token;

            // options for my top tracks
            let options = {
                url: 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term',
                method: 'GET',
                headers: {
                    authorization: 'Bearer ' + accessToken
                },
                json: true
            }

            //top tracks request
            request(options, (err, resp, body)=>{
                console.log('error:', err);
                console.log('status code:', resp && resp.statusCode);
                console.log('body:', body);
                res.send(body);
            })
        })
        .catch((err) => {
            console.log('.catch');
            res.send(err);
        })
})

module.exports = router;