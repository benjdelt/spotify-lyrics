import React from 'react';
import { connect } from 'react-redux';

import {Button, Dropdown } from 'react-bootstrap';

import { 
  selectTrack,
  fetchRecentlyPlayed
} from '../redux/actions';

function Navigation(props) {

  function handleClick(track, index) {
    if (track === "current") {
      props.selectTrack(props.nowPlaying);
    } else {
      props.selectTrack(props.recentlyPlayed[index]);
    }
  }

  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a href="/" className="logo">
          <div className="image-cont">
            <img src="/images/inverted-logo.png" alt="logo" className="avatar img-responsive"/>
          </div>
          <h2>Spotify Lyrics</h2>
        </a>
      </li>
      {props.loggedIn && (
        <div className="nav-buttons">
          <li className="nav-item">
            <Button variant="link" onClick={() => handleClick("current")}>
              <i className="fas fa-volume-up"></i><span> Currently Playing</span>
            </Button>
          </li>
          <li className="nav-item">
            <Dropdown onClick={props.fetchRecentlyPlayed} className="recently-played">
              <Dropdown.Toggle variant="link">
                <i className="fas fa-history"></i><span> Recently Played </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {props.recentlyPlayed.map((track, index) => {
                  return (
                    <Dropdown.Item key={index} onClick={() => handleClick("recent", index)}>
                      {track.name}
                    </Dropdown.Item>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </div>   
      )}
    </ul>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  recentlyPlayed: state.recentlyPlayed,
})

export default connect(mapStateToProps, { 
  selectTrack, fetchRecentlyPlayed
})(Navigation);
