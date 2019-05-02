import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlaying } from '../redux/actions';
// import SpotifyWebApi from 'spotify-web-api-js';

// const spotifyApi = new SpotifyWebApi();

class Main extends Component {

  componentDidMount() {
    this.props.fetchNowPlaying();
  }

  render() {
    return (
      <main className="col-sm-10">
        <div className="header">
          <img src={this.props.nowPlaying.albumArt} alt="cover"/>
          <div className="info">
            <h3>{this.props.nowPlaying.name}</h3>
            <h5>
              {this.props.nowPlaying.artist}
            </h5>
            <p>{this.props.nowPlaying.album}</p>
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
      </main>
    )
  }
}

const mapStateToProps = state => ({
  nowPlaying: state.nowPlaying
});

export default connect(mapStateToProps, { fetchNowPlaying })(Main);
