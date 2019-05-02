import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown } from 'react-bootstrap'; 

import { 
  getLoggedIn,
  fetchUser,
  fetchRecentlyPlayed
} from '../redux/actions';

import Login from './Login';


class Header extends Component {

  componentDidMount() {
    this.props.getLoggedIn();
    this.props.fetchUser();
    this.props.fetchRecentlyPlayed();
  }

  render() {
    return (
        <header className="col-sm-2 order-sm-first">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="logo">
              <div className="image-cont">
                <img src="/images/inverted-logo.png" alt="logo" className="avatar img-responsive"/>
              </div>
              <h2>Spotify Lyrics</h2>
            </a>
          </li>
          {this.props.loggedIn && (
            <div>
              <li className="nav-item">
                <Button variant="link">
                  <i className="fas fa-volume-up"></i><span> Currently Playing</span>
                </Button>
              </li>
              <li className="nav-item">
                <Dropdown>
                  <Dropdown.Toggle variant="link" id="dropdown-basic">
                    <i className="fas fa-history"></i><span> Recently Played </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {this.props.recentlyPlayed.map(track => {
                      return (
                        <Dropdown.Item href="#/action-1">{track.name}</Dropdown.Item>
                      )
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </div>   
          )}
        </ul>
        {this.props.loggedIn ? (
            <a href="#" className="user">
              <div className="image-cont">
                <img src={this.props.user.avatar} alt=""/>
              </div>
              <h5>{this.props.user.name}</h5>
            </a>
          ):(
            <Login />
        )}
      </header>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  user: state.user,
  recentlyPlayed: state.recentlyPlayed
})

export default connect(mapStateToProps, { 
  getLoggedIn,
  fetchUser,
  fetchRecentlyPlayed
})(Header);