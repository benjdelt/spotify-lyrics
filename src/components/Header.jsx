import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import User from './User';

import { 
  getLoggedIn,
  fetchUser,
  fetchRecentlyPlayed,
  selectTrack
} from '../redux/actions';

function Header(props) {

  useEffect(() => {
    props.fetchUser();
    props.getLoggedIn();
    props.fetchRecentlyPlayed();
  }, [])

  return (
    <header className="col-sm-2 order-sm-first">
      <Navigation />
      
      <User />
    </header>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  user: state.user,
  recentlyPlayed: state.recentlyPlayed,
  selectedTrack: state.selectedTrack
})

export default connect(mapStateToProps, { 
  getLoggedIn,
  fetchUser,
  fetchRecentlyPlayed,
  selectTrack
})(Header);
