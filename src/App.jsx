import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <main className="col-sm-9">
          Main Content
        </main>
        <header className="col-sm-3 order-sm-first">
          <h1 id="logo">Spotify Lyrics</h1>
          <br/>
        </header>
      </div>
    </div>
  );
}

export default App;
