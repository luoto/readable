import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    console.log(store.getState());

    return (
      <Provider store={store}>
        <div className="App">
        </div>
      </Provider>
    );
  }
}

export default App;
