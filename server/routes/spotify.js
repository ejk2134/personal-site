const express = require('express');
const router = express.Router();

const request = require('request');
const rp = require('request-promise');
const SpotifyWebAPI = require('spotify-web-api-node')

router.get('/', (req, res)=>{
    console.log('Spotify request');

    let auth = 'Basic ' + new Buffer(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64');

    let options = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        form: {
            grant_type: 'client_credentials'
        },
        headers: {
            authorization: auth
        },
        json: true
    }

    rp(options)
        .then((parsedBody) => {
            res.send(parsedBody);
        })
        .catch((err) => {
            res.send(err);
        })

    // request(options, (err, resp, body)=>{
    //     console.log('error:', err);
    //     console.log('status code:', resp && resp.statusCode);
    //     console.log('body:', body);
    //     res.status(200).send(JSON.parse(body));
    // })

    // let options = {
    //     url: 'https://api.spotify.com/v1/me/top/tracks',
    //     method: 'GET',
    //     headers: {
    //         authorization: 'Bearer 3c8d331c0d0d413a9135a4c700702a9e'
    //     }
    // }
})

module.exports = router;