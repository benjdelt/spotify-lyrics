import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown } from 'react-bootstrap'; 

import { 
  getLoggedIn,
  fetchRecentlyPlayed,
  selectTrack
} from '../redux/actions';

import User from './User';


class Header extends Component {

  componentDidMount() {
    this.props.getLoggedIn();
    this.props.fetchRecentlyPlayed();
  }

  handleClick(track, index) {
    if (track === "current") {
      this.props.selectTrack(this.props.nowPlaying);
    } else {
      this.props.selectTrack(this.props.recentlyPlayed[index]);
    }
  }

  render() {
    return (
        <header className="col-sm-2 order-sm-first">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="/" className="logo">
              <div className="image-cont">
                <img src="/images/inverted-logo.png" alt="logo" className="avatar img-responsive"/>
              </div>
              <h2>Spotify Lyrics</h2>
            </a>
          </li>
          {this.props.loggedIn && (
            <div>
              <li className="nav-item">
                <Button variant="link" onClick={() => this.handleClick("current")}>
                  <i className="fas fa-volume-up"></i><span> Currently Playing</span>
                </Button>
              </li>
              <li className="nav-item">
                <Dropdown>
                  <Dropdown.Toggle variant="link">
                    <i className="fas fa-history"></i><span> Recently Played </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {this.props.recentlyPlayed.map((track, index) => {
                      return (
                        <Dropdown.Item key={index} onClick={() => this.handleClick("recent", index)} >
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
        <User />
      </header>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  user: state.user,
  recentlyPlayed: state.recentlyPlayed,
  selectedTrack: state.selectedTrack
})

export default connect(mapStateToProps, { 
  getLoggedIn,
  fetchRecentlyPlayed,
  selectTrack
})(Header);