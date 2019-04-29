import React from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap'

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <main className="col-sm-10">
          <div className="header">
            <img src="https://picsum.photos/200?random=5" alt="cover"/>
            <div className="info">
              <h3>Track Title</h3>
              <h5>Artist</h5>
              <p>Album</p>
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
        <header className="col-sm-2 order-sm-first">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" id="logo">
                <div className="image-cont">
                  <img src="/images/inverted-logo.png" alt="logo" class="avatar img-responsive"/>
                </div>
                <h2>Spotify Lyrics</h2>
              </a>
            </li>
            <li className="nav-item">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/200?random=1"
                    alt="First cover"
                  />
                  <Carousel.Caption>
                    <h3>First cover label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/200?random=2"
                    alt="Third cover"
                  />

                  <Carousel.Caption>
                    <h3>Second cover label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://picsum.photos/200?random=3"
                    alt="Third cover"
                  />

                  <Carousel.Caption>
                    <h3>Third cover label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </li>
            <li className="nav-item">
              <a href="#" className="user">
                <div className="image-cont">
                  <img src="https://picsum.photos/30" alt=""/>
                </div>
                <h5>Benjamin Deltenre</h5>
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default App;
