import axios from 'axios';

import { 
  GET_LOGGED_IN, 
  FETCH_USER,
  SET_TRACK_LOADING,
  SET_TRACK_LOADED,
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
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}lyrics`, {
    params: {
      artist: artist,
      title: title
    }
  })
  if (response.data === "error") {
    return ["Couldn't find lyrics for this track"];
  }
  return response.data.split('\n');
}

async function getNowPlaying() {
  let nowPlaying = { 
    name: '',
    artist: '',
    album: '',
    albumArt: '',
    lyrics: ''
  }
  nowPlaying = await spotifyApi.getMyCurrentPlaybackState()
    .then(async (response) => {
      if (response && response.item) {
        const lyrics = await getLyrics(response.item.artists[0].name, response.item.name);
        return { 
          name: response.item.name,
          artist: response.item.artists[0].name,
          album: response.item.album.name, 
          albumArt: response.item.album.images[0].url,
          lyrics: lyrics
        }
      }
    })
  return nowPlaying;
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

// export const setTrackLoading = (dispatch) => {
//   dispatch({
//     type: SET_TRACK_LOADING,
//   })
// }

// export const setTrackLoaded = (dispatch) => {
//   dispatch({
//     type: SET_TRACK_LOADED,
//   })
// }

export const fetchNowPlaying = () => async dispatch => {
    const nowPlaying = getNowPlaying();
    dispatch({
      type: FETCH_NOW_PLAYING,
      payload: nowPlaying
    });
}

export const fetchRecentlyPlayed = () => dispatch => {
  spotifyApi.getMyRecentlyPlayedTracks({"limit": 15})
    .then(async (response) => {
      // Only select unique titles
      const recentlyPlayed = [];
      const map = new Map();
      for (let item of response.items) {
        if(!map.has(item.track.name)){
          map.set(item.track.name, true);
          recentlyPlayed.push({
              name: item.track.name,
              artist: item.track.artists[0].name,
              album: item.track.album.name,
              albumArt: item.track.album.images[0].url
          });
        }
      }

      dispatch({
        type: FETCH_RECENTLY_PLAYED,
        payload: recentlyPlayed.slice(0, 5)
      })
    })
}

export const selectTrack = track => async (dispatch) => {
  dispatch({
    type: SET_TRACK_LOADING,
  })
  if (!track) {
    track = await getNowPlaying();
  } else {
    track.lyrics = await getLyrics(track.artist, track.name);
  }
  dispatch({
    type: SELECT_TRACK,
    payload: track
  })
  dispatch({
    type: SET_TRACK_LOADED,
  })
}