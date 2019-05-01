import { GET_LOGGED_IN, FETCH_NOW_PLAYING } from './types';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  e = r.exec(q)
  while (e) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
     e = r.exec(q);
  }
  return hashParams;
}

const params = getHashParams();
const token = params.access_token;
if (token) {
  spotifyApi.setAccessToken(token);
}

export const getLoggedIn = () => dispatch => {
  const loggedIn = token ? true : false;
  dispatch({
    type: GET_LOGGED_IN,
    payload: loggedIn
  })
}

export const fetchNowPlaying = () => dispatch => {
  spotifyApi.getMyCurrentPlaybackState()
    .then((response) => {
      console.log(response);
      const nowPlaying = { 
        name: response.item.name,
        artist: response.item.artists[0].name,
        album: response.item.album.name, 
        albumArt: response.item.album.images[0].url
      }
      dispatch({
        type: FETCH_NOW_PLAYING,
        payload: nowPlaying
      });
    })
}
