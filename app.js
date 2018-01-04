const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const path = require('path');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const spotifyRouter = require('./server/routes/spotify');

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use('/spotify', spotifyRouter);

app.listen(port, () => {
    console.log('Listening on portabella', port);
})