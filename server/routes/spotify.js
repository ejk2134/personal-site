const express = require('express');
const router = express.Router();

const request = require('request');
const SpotifyWebAPI = require('spotify-web-api-node')

router.get('/', (req, res)=>{
    console.log('Spotify request');

    const options = {
        url: 'https://api.spotify.com/v1/me/top/tracks',
        method: 'GET',
        headers: {
            authorization: 'Bearer 3c8d331c0d0d413a9135a4c700702a9e'
        }
    }

    request(options, (err, resp, body)=>{
        console.log('error:', err);
        console.log('status code:', resp && resp.statusCode);
        console.log('body:', body);
        res.status(200).send(JSON.parse(body));
    })
})

module.exports = router;