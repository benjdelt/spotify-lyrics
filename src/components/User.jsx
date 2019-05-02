import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { Button, Dropdown } from 'react-bootstrap'

import { 
  getLoggedIn,
  fetchUser,
} from '../redux/actions';

function User(props) {
  
  useEffect(() => {
    props.fetchUser();
  }, [])  

  return (
    <Fragment>
      {props.loggedIn ? (
        <Dropdown className="user">
          <Dropdown.Toggle variant="link">
            <div className="image-cont">
              <img src={props.user.avatar} alt="avatar"/>
            </div>
            <h6>{props.user.name}</h6>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/" >Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ):(
        <Button 
          type="link" 
          href={process.env.REACT_APP_LOGIN_LINK} 
          variant="black" 
          className="login"
        >
          Login to Spotify
        </Button>    
      )}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  user: state.user,
})

export default connect(mapStateToProps, { 
  getLoggedIn,
  fetchUser,
})(User);