import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reducer from './reducers';
import RootView from './containers/RootView';
import Header from './components/Header';
import PostDetail from './components/PostDetail';
import CommentForm from './components/CommentForm';
import PostForm from './components/PostForm';
import NoMatch from './components/NoMatch';
import './styles/main.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main-wrapper">
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/comments/new" component={CommentForm} />
                <Route exact path="/comments/edit" component={CommentForm} />
                <Route exact path="/posts/new" component={PostForm} />
                <Route exact path="/posts/edit" component={PostForm} />
                <Route exact path="/:category" component={RootView} />
                <Route exact path="/:category/:id" component={PostDetail} />
                <Route exact path="/" component={RootView} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
