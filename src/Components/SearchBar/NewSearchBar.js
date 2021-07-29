import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import ReviewCardMap from "../ReviewCard/ReviewCardMap";
import {
  SearchBarContainer,
  SearchUnitOne,
  SearchUnitTwo,
  SearchSuggestionMainInput,
  SearchLocationInput,
  SearchSuggestionAside,
  LocationInputAside,
  LocationSuggestionAsideLeft,
  SearchIcon,
} from "./SearchBarStyles";

const NewSearchBar = () => {
  const [termKeyword, setTermKeyword] = useState("salad");
  const [locationTerm, setLocationTerm] = useState("san diego");

  const SEARCH_MAIN = gql`
    query GET_REVIEWS($term: String!, $location: String!) {
      searchMain: search(term: $term, location: $location) {
        total
        business {
          name
          id
          rating
          review_count
          location {
            address1
            city
            state
            country
          }
        }
      }
    }
  `;

  let qVars = {
    term: termKeyword,
    location: locationTerm,
  };

  const [getSearch, { loading, data }] = useLazyQuery(SEARCH_MAIN);

  useEffect(() => {
    getSearch({ variables: qVars });
  }, [data]);

  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getSearch({ variables: qVars });
  };

  console.log(data);
  return (
    <div>
      <SearchBarContainer onSubmit={onSubmit}>
        <SearchUnitOne>
          <SearchSuggestionAside>Find</SearchSuggestionAside>
          <SearchSuggestionMainInput
            value={termKeyword}
            onChange={(e) => setTermKeyword(e.target.value)}
            placeholder="plumbers,delivery,takeout..."
          />

          <LocationSuggestionAsideLeft>Near</LocationSuggestionAsideLeft>
          <SearchLocationInput
            value={locationTerm}
            onChange={(e) => setLocationTerm(e.target.value)}
            placeholder="address,city,state,or zip"
          />
          <LocationInputAside>
            <SearchIcon size="23" />
          </LocationInputAside>
        </SearchUnitOne>
      </SearchBarContainer>
    </div>
  );
};

export default NewSearchBar;
