import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';
import './App.css';

import Main from './components/Main';
import Header from './components/Header'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxLogger, reduxThunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);


function App() {
  
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
}

export default App;
