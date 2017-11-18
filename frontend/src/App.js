import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import RootView from './containers/rootview';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (<div>
      <header>
        <h1>Readable</h1>
      </header>
      <div id="rootView" style={{background: '#e57373'}}>
      <section>
        <h2>Categories</h2>
        <ul className="categoryList">
          <li><a href="/categories/udacity">Udacity</a></li>
          <li><a href="/categories/react">React</a></li>
          <li><a href="/categories/redux">Redux</a></li>
        </ul>
      </section>
      <section>
        <h2>Posts</h2>
        <ul className="postList">
          <li>
            <div className="post">
              <h3>Kitten trying his best to pet gently</h3>
              <ul>
                <li>10 votes</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="post">
              <h3>Bank of America just imposed a new $60 annual fee on their previously free personal savings account</h3>
              <ul>
                <li>5 votes</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="post">
              <h3>Great officiating</h3>
              <ul>
                <li>3 votes</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li><button>votescore</button></li>
          <li><button>timestamp</button></li>
        </ul>
      </section>
      <button>Submit Post</button>
    </div>
    <div id="postDetailView" style={{background: '#b2ebf2'}}>
      <h2>Kitten trying his best to pet gently</h2>
      <p>dayz <span>10 votes</span></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <button>Edit</button>
      <button>Delete</button>
      <section>
        <ul>
          <li>What? <button>edit</button><button>delete</button></li>
          <li>That's so cute!!!! <button>edit</button><button>delete</button></li>
          <li>Reminds of the time when... <button>edit</button><button>delete</button></li>
        </ul>
      </section>
      <section>
        <button>Add Comment</button>
      </section>
      <section>
        <form>
          <input type="text" placeholder="Author"/>
          <textarea placeholder="comment body"></textarea>
          <button>Submit comment</button>
        </form>
      </section>
    </div>
    <div id="createEditView" style={{background: '#dcedc8'}}>
      <form>
        <input name="title" type="text" placeholder="Title"></input>
        <textarea name="body" placeholder="Body"></textarea>
        <input name="author" type="text" placeholder="Author"></input>
      </form>
    </div>
  </div>);
  }
}

export default App;
