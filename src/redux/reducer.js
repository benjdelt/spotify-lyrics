import { 
  GET_LOGGED_IN,
  FETCH_USER,
  FETCH_NOW_PLAYING,
  FETCH_RECENTLY_PLAYED
} from './types';

export const initialState = {
  loggedIn: false,
  user: '',
  nowPlaying: {
    name: '',
    artist: '',
    album: '',
    albumArt: ''
  },
  recentlyPlayed: []
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
    default:
      return state;
  }
}