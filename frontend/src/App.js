import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './App.css';

import CategoryList from './components/categorylist';
import PostList from './components/postlist';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CategoryList categories={store.getState().categories} />
          <PostList posts={store.getState().posts} />
        </div>
      </Provider>
    );
  }
}

export default App;
