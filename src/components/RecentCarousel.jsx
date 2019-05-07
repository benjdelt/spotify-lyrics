import React,{ Fragment } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-bootstrap';

import { 
  fetchRecentlyPlayed,
  selectTrack
} from '../redux/actions';

function RecentCarousel(props) {

  function handleClick(index) {
    props.selectTrack(props.recentlyPlayed[index]);
  }

  return (
    <Fragment>
      {props.loggedIn && (
        <Carousel interval={null} indicators={false}>
          {props.recentlyPlayed.map((track, index) => {
            return (
            <Carousel.Item key={index} onClick={() => handleClick(index)}>
                <h3>{track.artist}</h3>
                <p>{track.name}</p>
            </Carousel.Item>)
          })}
        </Carousel>
      )}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  recentlyPlayed: state.recentlyPlayed,
})

export default connect(mapStateToProps, { 
  fetchRecentlyPlayed,
  selectTrack
})(RecentCarousel);
