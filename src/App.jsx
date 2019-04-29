import React from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap'

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <main className="col-sm-10">
          Main Content
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
