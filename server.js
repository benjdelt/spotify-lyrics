require('dotenv').config()

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const cors = require('cors');
const request = require('request');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8888;

const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));

// Spotify

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET; 
const spotifyRedirectUri = process.env.SPOTIFY_REDIRECT_URI;

const stateKey = 'spotify_auth_state';


const generateRandomString = function(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// the __dirname is the current directory from where the script is running

app.use(express.static(path.join(__dirname, 'src')));
app.use(cors());
app.use(express.static(__dirname));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/login', function(req, res) {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = 'user-read-currently-playing user-read-recently-played';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: spotifyClientId,
      scope: scope,
      redirect_uri: spotifyRedirectUri,
      state: state
    })
  );
  
})

app.get('/me', function(req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: spotifyRedirectUri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(spotifyClientId + ':' + spotifyClientSecret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        const access_token = body.access_token,
            refresh_token = body.refresh_token;

        const options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'Authorization': 'Basic ' + (new Buffer(spotifyClientId + ':' + spotifyClientSecret).toString('base64')) 
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log(`Listening on Port ${port}`);
app.listen(port);