import React, { useState, useEffect, useContext } from "react";
import MainContext from "../../Context/MainContext";
import Testing from "../ReviewCard/Testing";
import { useQuery, gql } from "@apollo/client";
import ReviewCardMap from "./ReviewCardMap";
const ReviewMainCard = () => {
  const LOCATION_FETCH = gql`
    {
      search(location: "san francisco", limit: 3) {
        business {
          name
          id
          photos
        }
      }
    }
  `;

  const location_data = useQuery(LOCATION_FETCH);

  if (!location_data) return <div></div>;
  return (
    <div>
      <ReviewCardMap data={location_data.data} />
    </div>
  );
};

export default ReviewMainCard;
