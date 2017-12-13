import { URL } from '../helpers/config';
import { generateRequest } from './actionHelpers';
import {
  GET_COMMENT,
  COMMENTS_RECEIVED,
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from './actionTypes';

export const getComment = (id) => {
  return (dispatch) => {
    const url = `${URL}/comments/${id}`;
    const request = generateRequest(url, 'GET');

    fetch(request)
      .then((response) => {
        dispatch({
          type: GET_COMMENT,
          response
        });
      })
      .catch(error => console.log(error));
  }
};

export const getComments = (postId) => {
  return (dispatch) => {
    const url = `${URL}/posts/${postId}/comments`;
    const request = generateRequest(url, 'GET');

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: COMMENTS_RECEIVED,
          comments: data
        });
      })
      .catch(error => console.log(error));
  }
};

export const createComment = (comment) => {
  return (dispatch) => {
    const url = `${URL}/comments`;
    const request = generateRequest(url, 'POST', {...comment});

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: CREATE_COMMENT,
          comment: data
        })
      })
      .catch(error => console.log(error));
  };
};


export const deleteComment = (id) => {
  return (dispatch) => {
    const url = `${URL}/comments/${id}`;
    const request = generateRequest(url, 'DELETE');

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: DELETE_COMMENT,
          comment: data
        });
         // run another action so list updates
        getComments(data.parentId)(dispatch);
      })

      .catch(error => console.log(DELETE_COMMENT, error));
  }
};

export const editComment = (comment) => {
  return (dispatch) => {
    const url = `${URL}/comments/${comment.id}`;
    const request = generateRequest(url, 'PUT', {...comment});

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: EDIT_COMMENT,
          comment: data
        });
      })
      .catch(error => console.log(error));
  }
};

export const voteComment = (id, updown) => {
  return (dispatch) => {
    const url =`${URL}/comments/${id}`;
    const body = updown === 'upVote' ? { option: 'upVote' } : { option: 'downVote'};
    const request = generateRequest(url, 'POST', body);

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: updown === 'upVote' ? UPVOTE_COMMENT : DOWNVOTE_COMMENT,
          comment: data
        });
      })
      .catch(error => console.log(error));
  }
};
