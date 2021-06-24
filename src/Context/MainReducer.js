import { BUSINESS_SEARCH, GET_REVIEWS } from "./types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case BUSINESS_SEARCH:
      return { ...state, items: action.payload };

    case GET_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};
