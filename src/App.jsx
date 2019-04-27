import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-8" id="col-2">
            Main Content
          </div>
          <div className="col-sm-4 order-sm-first" id="col-1">
            Navigation
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
