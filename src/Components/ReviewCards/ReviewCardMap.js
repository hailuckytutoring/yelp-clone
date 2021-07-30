import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import ReviewCardDetails from "./ReviewCardDetails";

const ReviewCardMap = ({ data }) => {
  const [dataDetails, setDataDetails] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);

  useEffect(() => {
    if (!data) {
      console.log("error...data not loading/fetch error");
    } else {
      setDataDetails(data.search.business);
    }
  }, [data]);
  const REVIEWS_FETCH = gql`
    query GET_REVIEWS(
      $business: String!
      $business2: String!
      $business3: String!
    ) {
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
      Review_3: reviews(business: $business3) {
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
    business3: dataDetails[2] && dataDetails[2].id,
  };

  const location_details = useQuery(REVIEWS_FETCH, {
    variables: qVariables,
  });

  if (location_details.loading) {
    return <h1>loading</h1>;
  }

  let results =
    location_details.data &&
    Object.entries(location_details.data).map(([k, v]) => ({
      review: v.review[0].text,
      id: v.review[0].id,
    }));

  console.log(results);
  console.log(dataDetails);

  if (!location_details.data) return <div></div>;
  return (
    <>
      <ReviewCardDetails items={dataDetails} resData={results} />
    </>
  );
};

export default ReviewCardMap;
