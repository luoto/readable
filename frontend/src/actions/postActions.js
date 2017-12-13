import { URL } from '../helpers/config';
import { generateRequest } from './actionHelpers';
import {
  GET_POST,
  POSTS_RECIEVED,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from './actionTypes';

export const getPost = (id) => {
  return (dispatch) => {
    const url = `${URL}/posts/${id}`;
    const request = generateRequest(url, 'GET');

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: GET_POST,
          post: data
        });
      })
      .catch(error => console.log(error));
  }
};

export const getPosts = (category) => {
  return (dispatch) => {
    const url = category ? `${URL}/${category}/posts` : `${URL}/posts`;
    const request = generateRequest(url, 'GET');

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({type: POSTS_RECIEVED, posts: data});
      })
      .catch(error => console.log(error));
  }
};

export const createPost = (post) => {
  return (dispatch) => {
    const url = `${URL}/posts`;
    const request = generateRequest(url, 'POST', {...post});

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: CREATE_POST,
          post: data
        });
      })
      .catch(error => console.log(error));
  }
};

export const deletePost = (id) => {
  return (dispatch) => {
    const url = `${URL}/posts/${id}`;
    const request = generateRequest(url, 'DELETE');

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: DELETE_POST,
          post: data
        });
      })
      .catch(error => console.log(error));
  }
};

export const editPost = (post) => {
  return (dispatch) => {
    const url = `${URL}/posts/${post.id}`;
    const request = generateRequest(url, 'PUT', {...post});

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: EDIT_POST,
          post: data
        })
      })
      .catch(error => console.log(error));
  }
};

export const votePost = (id, updown) => {
  return (dispatch) => {
    const url =`${URL}/posts/${id}`;
    const body = updown === 'upVote' ? { option: 'upVote' } : { option: 'downVote'};
    const request = generateRequest(url, 'POST', body);

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: updown === 'upVote' ? UPVOTE_POST : DOWNVOTE_POST,
          post: data
        });
      })
      .catch(error => console.log(error));
  }
};
