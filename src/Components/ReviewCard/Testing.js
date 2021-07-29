import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import ReviewCardTest from "./ReviewCardTest";

const Testing = ({ data }) => {
  const [dataDetails, setDataDetails] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);

  useEffect(() => {
    if (!data) {
      console.log("error...data not loading/fetch error");
    } else {
      setDataDetails(data.search.business);
      setItemDetails(data.search.business);
    }
  }, [data]);
  const REVIEWS_FETCH = gql`
    query GET_REVIEWS($business: String!, $business2: String!) {
      Review_1: reviews(business: $business) {
        review {
          id
          text
          rating
        }
      }
      Review_2: reviews(business: $business2) {
        review {
          id
          text
          rating
        }
      }
    }
  `;

  let qVariables = {
    business: dataDetails[0] && dataDetails[0].id,
    business2: dataDetails[1] && dataDetails[1].id,
  };

  const location_details = useQuery(REVIEWS_FETCH, {
    variables: qVariables,
  });

  if (location_details.loading) {
    return <h1></h1>;
  }

  const namesMade = itemDetails.map((i) => {
    return i;
  });

  let result =
    location_details.data &&
    Object.entries(location_details.data).map(([k, v]) => ({
      label: k,
      review: v.review[0].text,
      id: v.review[0].id,
      items: namesMade,
    }));

  if (!location_details.data) return <div></div>;

  return (
    <div>
      <ReviewCardTest item={result} />;
    </div>
  );
};

export default Testing;
