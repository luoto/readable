import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Header from './components/Header';
import CategoryList from './components/CategoryList';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import PostFilter from './components/PostFilter';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CategoryList/>
        <PostList/>
        <PostFilter/>
        <NewPost/>
      </div>
    );
  }
}

export default App;
