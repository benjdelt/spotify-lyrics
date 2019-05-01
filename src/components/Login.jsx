import React from 'react';
import { Button } from 'react-bootstrap'

export default function Login() {

  return (
    <Button type="link" href={process.env.REACT_APP_LOGIN_LINK} variant="black" className="login">Login to Spotify</Button>    
  )
}
