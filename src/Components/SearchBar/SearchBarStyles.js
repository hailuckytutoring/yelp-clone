import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";

export const SearchBarContainer = styled.div`
  display: flex;
  min-width: 100%;
  margin-top: 40px;
  /* background-color: red; */
`;

export const SearchUnitOne = styled.form`
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: flex;
`;

export const SearchUnitTwo = styled.form`
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: flex;
`;

export const SearchSuggestionMainInput = styled.input`
  position: relative;
  height: 45px;
  width: 400px;
  outline: none;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  padding-left: 10px;
  color: #7a7a7a;
  font-weight: 400;
  ::placeholder {
    color: #a0a0a0;
    font-weight: 400;
  }
`;

export const SearchLocationInput = styled.input`
  position: relative;
  height: 45px;
  width: 400px;
  outline: none;
  /* background-color: red; */
  color: black;
  font-weight: 400;

  padding-left: 10px;
  right: 45px;
  ::placeholder {
    color: #a0a0a0;
    font-weight: 400;
  }
`;

export const Line = styled.div`
  content: "";
  position: absolute;
  top: 8px;
  right: 0;
  bottom: 8px;
  width: 1px;
  background-color: #ccc;
`;

export const SearchSuggestionAside = styled.button`
  background-color: red;

  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  position: relative;
  left: 20px;
  background-color: white;
  height: 45px;
  padding: 0 20px;
  font-weight: 700;
  color: grey;
`;

export const LocationInputAside = styled.button`
  background-color: red;

  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  position: relative;
  right: 30px;
  background-color: #d32323;
  height: 45px;
  padding: 0 10px;
  font-weight: 700;
  width: 65px;
  color: grey;
  right: 45px;
`;

export const LocationSuggestionAsideLeft = styled.button`
  position: relative;
  background-color: white;
  right: 40px;
  height: 45px;
  padding: 0 20px;
  font-weight: 700;
  color: grey;
`;

export const SearchIcon = styled(IoSearchSharp)`
  position: relative;
  left: 10px;
  bottom: 1px;
`;
