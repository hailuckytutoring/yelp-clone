import React, { useState, useEffect, useContext, useRef } from "react";
import MainContext from "../../Context/MainContext";
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

//turn on CORS SERVER

// TODO Gen

const SearchBar = () => {
  const context = useContext(MainContext);

  const { items, getBusinessSearch } = context;

  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("San Francisco,CA ");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getBusinessSearch(term, location);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    getBusinessSearch(term, location);
    setResults(items);
  };

  return (
    <SearchBarContainer>
      <SearchUnitOne onSubmit={onSubmit}>
        <SearchSuggestionAside>Find</SearchSuggestionAside>
        <SearchSuggestionMainInput
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="plumbers,delivery,takeout..."
        />

        <LocationSuggestionAsideLeft>Near</LocationSuggestionAsideLeft>
        <SearchLocationInput
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="address,city,state,or zip"
        />
        <LocationInputAside>
          <SearchIcon size="23" />
        </LocationInputAside>
      </SearchUnitOne>
    </SearchBarContainer>
  );
};

export default SearchBar;
