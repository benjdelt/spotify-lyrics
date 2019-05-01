import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown } from 'react-bootstrap'; 

import { getLoggedIn } from '../redux/actions';

import Login from './Login';


class Header extends Component {

  componentDidMount() {
    this.props.getLoggedIn();
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
                    <Dropdown.Item href="#/action-1">Track 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Track 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Track 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </div>   
          )}
        </ul>
        {this.props.loggedIn ? (
            <a href="#" className="user">
              <div className="image-cont">
                <img src="https://picsum.photos/30" alt=""/>
              </div>
              <h5>Benjamin Deltenre</h5>
            </a>
          ):(
            <Login />
        )}
      </header>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps, { getLoggedIn })(Header);