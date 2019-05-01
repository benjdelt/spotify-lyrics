import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';
import './App.css';

import Main from './components/Main';
import Header from './components/Header'


const store = createStore(
  reducer, 
  compose(
    applyMiddleware(reduxLogger, reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


class App extends Component {
  
  render() {
    return(
      <Provider store={store}>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <Main />
            <Header />
          </div>
        </div>
      </Provider>
    );
  };
}

export default App;
