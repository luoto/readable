export const sortFilterReducer = (state = 'voteScore', action) => {
  switch (action.type) {
    case 'TOGGLE_SORT_FILTER':
      return action.filter;
    default:
      return state;
  }
}
