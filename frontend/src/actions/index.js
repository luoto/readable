import {
  TOGGLE_SORT_FILTER,
  TOGGLE_CATEGORY_FILTER,
  CATEGORIES_RECIEVED,
  GET_POST,
  POSTS_RECIEVED,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  GET_COMMENT,
  COMMENTS_RECEIVED,
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from './actionTypes';

// HELPERS
function generateRequest(url, method, body = {}) {
  if (method === 'GET' || method === 'DELETE') {
    return new Request(url, {
      method,
      headers: new Headers({"Authorization": 'hello', "Content-Type": 'application/json'}),
    });
  }

  return new Request(url, {
    method,
    headers: new Headers({"Authorization": 'hello', "Content-Type": 'application/json'}),
    body: JSON.stringify(body)
  });
}

// FILTER ACTIONS
export const selectSortFilter = (filter) => {
  return {
    type: TOGGLE_SORT_FILTER,
    filter
  };
};

// CATEGORY ACTIONS
export const selectCategory = (filter) => {
  return {
    type: TOGGLE_CATEGORY_FILTER,
    filter
  };
};

export const getCategories = () => {
  return (dispatch) => {
    const url = 'http://localhost:3001/categories';
    const request = generateRequest(url, 'GET');

    fetch(request)
      .then(response => response.json())
      .then((data) => {
        dispatch({type: CATEGORIES_RECIEVED, categories: data.categories});
      })
      .catch(error => console.log(error));
  }
};


// POST ACTIONS
export const getPost = (id) => {
  return (dispatch) => {
    const url = `http://localhost:3001/posts/${id}`;
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
    const url = category ? `http://localhost:3001/${category}/posts` : `http://localhost:3001/posts`;
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
    const url = 'http://localhost:3001/posts';
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
    const url = `http://localhost:3001/posts/${id}`;
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
    const url = `http://localhost:3001/posts/${post.id}`;
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
    const url =`http://localhost:3001/posts/${id}`;
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

// COMMENT ACTIONS
export const getComment = (id) => {
  return (dispatch) => {
    const url = `http://localhost:3001/comments/${id}`;
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
    const url = `http://localhost:3001/posts/${postId}/comments`;
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
    const url = 'http://localhost:3001/comments';
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
    const url = `http://localhost:3001/comments/${id}`;
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
    const url = `http://localhost:3001/comments/${comment.id}`;
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
    const url =`http://localhost:3001/comments/${id}`;
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
