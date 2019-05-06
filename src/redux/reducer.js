import { 
  GET_LOGGED_IN,
  FETCH_USER,
  SET_TRACK_LOADING,
  SET_TRACK_LOADED,
  FETCH_NOW_PLAYING,
  FETCH_RECENTLY_PLAYED,
  SELECT_TRACK
} from './types';

export const initialState = {
  loggedIn: false,
  user: '',
  nowPlaying: {
    name: '',
    artist: '',
    album: '',
    albumArt: '',
    lyrics: []
  },
  recentlyPlayed: [],
  selectedTrack: {
    name: '',
    artist: '',
    album: '',
    albumArt: '',
    lyrics: []
  },
  trackLoading: true,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload
      }
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_TRACK_LOADING:
      return {
        ...state,
        trackLoading: true
      }
    case SET_TRACK_LOADED:
      return {
        ...state,
        trackLoading: false
      }
    case FETCH_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload
      }
    case FETCH_RECENTLY_PLAYED:
      return {
        ...state,
        recentlyPlayed: action.payload
      }
    case SELECT_TRACK:
      return {
        ...state,
        selectedTrack: action.payload
      }
    default:
      return state;
  }
}