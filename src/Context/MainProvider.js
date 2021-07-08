import React, { useReducer } from "react";
import MainContext from "./MainContext";
import MainReducer from "./MainReducer";
import axios from "axios";

import { BUSINESS_SEARCH, GET_REVIEWS } from "./types";

const MainProvider = (props) => {
  const initialState = {
    items: [],
    reviews: [],
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);
  // const apiToken =
  //   "fmMzdHVM5oYRWHfzgzS9oTum-x0QcL6avBbwmHm0nKkJdgtXWK0ScrqN4Hd3W_hJzXp3kinbGFiyTOTj-8I5soWYh78holBzu7BaqIdg3urW4hSOZwpOEcYBxOfKYHYx";

  const headerAuth = {
    headers: {
      Authorization:
        "Bearer mnle5EXoFYtyyMzH3dsFwpbf90dzZb8qfnVABxz6L4FA2kcP8Tj7TiWexYdU_ILiMb-I8Ll5uDenDgtKfGxF5F9YUhAOmGpzHiHrXkcomyxcpv6GCNGdIUCveEjSYHYx",
    },
  };

  const getBusinessSearch = async (term, location) => {
    try {
      const res = await axios.get(
        ` https://mycorsproxybypass.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
        headerAuth
      );

      dispatch({ type: BUSINESS_SEARCH, payload: res.data.businesses });
    } catch (error) {
      console.log(error);
    }
  };

  const getReviews = async (id) => {
    try {
      const res = await axios.get(
        `https://mycorsproxybypass.herokuapp.com/https://api.yelp.com/v3/businesses/${id}/reviews`,
        headerAuth
      );
      dispatch({ type: GET_REVIEWS, payload: res.data.reviews });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainContext.Provider
      value={{
        items: state.items,
        reviews: state.reviews,
        getBusinessSearch: getBusinessSearch,
        getReviews: getReviews,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;

//random business ids = wGl_DyNxSv8KUtYgiuLhmA, WavvLdfdP6g8aZTtbBQHTw,ri7UUYmx21AgSpRsf4-9QA
