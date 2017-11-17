const initialState = {
  posts: [{
    id: 'post1',
    timestamp: Date.now(),
    title: 'First Post',
    body: 'First Body Post',
    author: 'Post Author 1',
    category: 'category provided by the server',
    voteScore: 1,
    delete: false
  }, {
    id: 'post2',
    timestamp: Date.now(),
    title: 'Second Post',
    body: 'Post Body',
    author: 'Post Author 2',
    category: 'category provided by the server',
    voteScore: 1,
    delete: false
  }, {
    id: 'post3',
    timestamp: Date.now(),
    title: 'Third Post',
    body: 'Post Body',
    author: 'Post Author 3',
    category: 'category provided by the server',
    voteScore: 1,
    delete: false
  }],
  comments: [{
    id: 'comment1',
    parentId: 'post1',
    timestamp: Date.now(),
    body: 'First comment body',
    author: 'comment author 1',
    voteScore: 1,
    delete: false,
    parentDelete: false
  }, {
    id: 'comment2',
    parentId: 'post1',
    timestamp: Date.now(),
    body: 'second comment body',
    author: 'comment author 2',
    voteScore: 1,
    delete: false,
    parentDelete: false
  }, {
    id: 'comment3',
    parentId: 'post1',
    timestamp: Date.now(),
    body: 'third comment body',
    author: 'comment author 3',
    voteScore: 1,
    delete: false,
    parentDelete: false
  }, {
    id: 'comment4',
    parentId: 'post1',
    timestamp: Date.now(),
    body: 'fourth comment body',
    author: 'comment author 4',
    voteScore: 1,
    delete: false,
    parentDelete: false
  }, {
    id: 'comment5',
    parentId: 'post1',
    timestamp: Date.now(),
    body: 'fifth comment body',
    author: 'comment author 5',
    voteScore: 1,
    delete: false,
    parentDelete: false
  }],
  categories: [{
    name: 'react',
    path: 'react'
  }, {
    name: 'redux',
    path: 'redux'
  }, {
    name: 'udacity',
    path: 'udacity'
  }],
  categoryFilter: 'react',
  sortByFilter: 'voteScore'
}

const readableApp = (state = initialState, action) => {
  return state;
}

export default readableApp;
