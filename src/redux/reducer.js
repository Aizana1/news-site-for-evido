import * as TYPES from "./actionTypes";

let initialState = {
  posts: [],
  post: {},
  commentsInfo: {
    isLoading: true,
    comments: [],
    isError: false
  },
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.STORE_NEWS:
      return { ...state, posts: payload };
    case TYPES.SHOW_SINGLE_POST:
      return { ...state, post: state.posts.find((item) => item.id == payload) };
    case TYPES.COMMENTS_LOADING:
      return { ...state, commentsInfo: initialState.commentsInfo };
    case TYPES.COMMENTS_LOADED:
      return {
        ...state,
        commentsInfo: { comments: payload, isLoading: false },
      };
    case TYPES.COMMENTS_FAILED:
        return {
            ...state,
            commentsInfo: { comments: [], isError: true },
          };
    default:
      return state;
  }
};
