

import axios from 'axios';

import { 
  GET_LOGGED_IN, 
  FETCH_USER,
  FETCH_NOW_PLAYING,
  FETCH_RECENTLY_PLAYED,
  SELECT_TRACK
} from './types';
import SpotifyWebApi from 'spotify-web-api-js';

require('dotenv').config()

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

async function getLyrics(artist, title) {
  const response = await axios.get('http://localhost:8888/lyrics', {
    params: {
      artist: artist,
      title: title
    }
  })
  return response.data.split('\n');
}


export const getLoggedIn = () => dispatch => {
  const loggedIn = token ? true : false;
  dispatch({
    type: GET_LOGGED_IN,
    payload: loggedIn
  })
}

export const fetchUser = () => dispatch => {
  spotifyApi.getMe()
    .then((response) => {
      const user = {
        name: response.display_name,
        avatar: response.images[0].url
      }
      dispatch({
        type: FETCH_USER,
        payload: user
      })
    }) 
}

export const fetchNowPlaying = () => dispatch => {
  spotifyApi.getMyCurrentPlaybackState()
    .then(async (response) => {
      const lyrics = await getLyrics(response.item.artists[0].name, response.item.name);
      console.log(lyrics);
      const nowPlaying = { 
        name: response.item.name,
        artist: response.item.artists[0].name,
        album: response.item.album.name, 
        albumArt: response.item.album.images[0].url,
        lyrics: lyrics
      }
      dispatch({
        type: FETCH_NOW_PLAYING,
        payload: nowPlaying
      });
    })
}

export const fetchRecentlyPlayed = () => dispatch => {
  spotifyApi.getMyRecentlyPlayedTracks({"limit": 5})
    .then((response) => {
      const recentlyPlayed = response.items.map(item => {
        return {
          name: item.track.name,
          artist: item.track.artists[0].name,
          album: item.track.album.name,
          albumArt: item.track.album.images[0].url
        }
      })
      dispatch({
        type: FETCH_RECENTLY_PLAYED,
        payload: recentlyPlayed
      })
    })
}

export const selectTrack = track => async (dispatch) => {
  if (!track) {
    track = await spotifyApi.getMyCurrentPlaybackState()
      .then(async (response) => {
        const lyrics = await getLyrics(response.item.artists[0].name, response.item.name);
        return { 
          name: response.item.name,
          artist: response.item.artists[0].name,
          album: response.item.album.name, 
          albumArt: response.item.album.images[0].url,
          lyrics: lyrics
        }
      })
  }
  dispatch({
    type: SELECT_TRACK,
    payload: track
  })
}