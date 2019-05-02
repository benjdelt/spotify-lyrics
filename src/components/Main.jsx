import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLoggedIn, fetchNowPlaying, selectTrack } from '../redux/actions';

class Main extends Component {

  componentDidMount() {
    this.props.fetchNowPlaying();    
    this.props.selectTrack();
  }

  render() {
    return (
      <main className="col-sm-10">
        {this.props.loggedIn ? (
          <Fragment>
            <div className="header">
              <img src={this.props.selectedTrack.albumArt} alt="cover"/>
              <div className="info">
                <h3>{this.props.selectedTrack.name}</h3>
                <h5>
                  {this.props.selectedTrack.artist}
                </h5>
                <p>{this.props.selectedTrack.album}</p>
              </div>
            </div>
            <div className="lyrics">
              <p>
                End of passion play, crumbling away<br />
                I'm your source of self-destruction<br />
                Veins that pump with fear, sucking darkest clear<br />
                Leading on your death's construction<br />
                <br />
                Taste me, you will see, more is all you need<br />
                Dedicated to how I'm killing you<br />
                <br />
                Come crawling faster<br />
                Obey your master<br />
                Your life burns faster<br />
                Obey your...<br />
                <br />
                Master! Master!<br />
                Master of Puppets, I'm pulling your strings<br />
                Twisting your mind and smashing your dreams<br />
                Blinded by me, you can't see a thing<br />
                Just call my name 'cause I'll hear you scream<br />
                Master! Master!<br />
                Just call my name 'cause I'll hear you scream<br />
                Master! Master!<br />
                <br />
                Needlework the way, never you betray<br />
                Life of death becoming clearer<br />
                Pain monopoly, ritual misery<br />
                Chop your breakfast on a mirror<br />
                <br />
                Taste me, you will see, more is all you need<br />
                Dedicated to how I'm killing you<br />
                <br />
                Come crawling faster (faster)<br />
                Obey your master (master)<br />
                Your life burns faster (faster)<br />
                Obey your...<br />
                <br />
                Master! Master!<br />
                Master of Puppets, I'm pulling your strings<br />
                Twisting your mind and smashing your dreams<br />
                Blinded by me, you can't see a thing<br />
                Just call my name 'cause I'll hear you scream<br />
                Master! Master!<br />
                Just call my name 'cause I'll hear you scream<br />
                Master! Master!<br />
                <br />
                (Master, master, master, master...)<br />
                <br />
                Master! Master! Where’s the dreams that I’ve been after?<br />
                Master! Master! You promised only lies<br />
                Laughter! Laughter! All I hear or see is laughter<br />
                Laughter! Laughter! Laughing at my cries<br />
                Fix me!<br />
                <br />
                Hell is worth all that, natural habitat<br />
                Just a rhyme without a reason<br />
                Never-ending maze, drift on numbered days<br />
                Now, your life is out of season<br />
                <br />
                I will occupy, I will help you die<br />
                I will run through you, now I rule you too<br />
                <br />
                Come crawling faster (faster)<br />
                Obey your master (master)<br />
                Your life burns faster (faster)<br />
                Obey your...<br />
                <br />
                Master! Master!<br />
                Master of puppets, I'm pulling your strings<br />
                Twisting your mind and smashing your dreams<br />
                Blinded by me, you can't see a thing<br />
                Just call my name 'cause I'll hear you scream<br />
                Master! Master!<br />
                Just call my name 'cause I'll hear you scream<br />
                Master! Master!<br />
              </p>
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
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  nowPlaying: state.nowPlaying,
  selectedTrack: state.selectedTrack
});

export default connect(mapStateToProps, { getLoggedIn, fetchNowPlaying, selectTrack })(Main);
