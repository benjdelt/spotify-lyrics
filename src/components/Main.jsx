import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLoggedIn, fetchNowPlaying, selectTrack } from '../redux/actions';

function Main(props) {

  useEffect(() => {
    props.fetchNowPlaying();    
    props.selectTrack();
  }, [])

  return (
    <main className="col-sm-10">
      {props.loggedIn ? (
        <Fragment>
          <div className="header">
            <img src={props.selectedTrack.albumArt} alt="cover"/>
            <div className="info">
              <h3>{props.selectedTrack.name}</h3>
              <h5>
                {props.selectedTrack.artist}
              </h5>
              <p>{props.selectedTrack.album}</p>
            </div>
          </div>
          <div className="lyrics">
            
            <p>{props.selectedTrack.lyrics.map((line, index) =>{
              return (
                <span key={index}>{line}<br /></span>
              )
            } )}</p>
          </div>
        </Fragment>
      ):(
        <div className="disclaimer">
          <h3>Please log in to continue</h3>
          <p>
            Click on the "Login to Spotify" button in the lower-left corner to connect to your Spotify account,
            then click "Okay" to grant authorization to this app.
          </p>
          <p>
            This app shows the lyrics of the track currently playing on your Spotify account. The left-side menu 
            allows you to also see the lyrics for your recently played tracks or to go back to your currently 
            playing track.
          </p>
          <p>
            Although cookies are used to keep track of your account, no information is collected or saved.
          </p>
        </div>
      )}    
    </main>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  nowPlaying: state.nowPlaying,
  selectedTrack: state.selectedTrack
});

export default connect(mapStateToProps, { getLoggedIn, fetchNowPlaying, selectTrack })(Main);
