import React, { useState, useEffect, useContext } from "react";
import MainContext from "../../Context/MainContext";

import { useQuery, gql } from "@apollo/client";
import NewReviewCard from "./NewReviewCard";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  max-width: 990px;
  margin: 5px auto;
  padding: 0 15px;
  background-color: lightseagreen;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ReviewCardMap = () => {
  const context = useContext(MainContext);

  const [reviewId, setReviewId] = useState([]);
  const [newArry, setNewArry] = useState([]);

  const { items } = context;

  useEffect(() => {
    const idItems = items.slice(0, 3).map((keys) => {
      return keys.id;
    });
    setReviewId(idItems);
  }, [items]);

  let qVars = {
    business: reviewId[0], // <===Replace with ids passed to state
    business2: reviewId[1],
  };

  console.log(reviewId)

  const REVIEWS_FETCH = gql`
    query GET_REVIEWS($business: String!, $business2: String!) {
      Review_1: reviews(business: $business) {
        total
        id
        review {
          text
          rating
        }
      }
      Review_2: reviews(business: $business2) {
        total
        id

        review {
          text
          rating
        }
      }
    }
  `;

  const reviewItems =
    items &&
    items.slice(0, 3).map((items) => {
      return items;
    });

  const { error, loading, data } = useQuery(REVIEWS_FETCH, {
    variables: qVars,
  });

  let result =
    data &&
    items &&
    Object.entries(data).map(([k, v]) => ({
      a: reviewItems,
      label: k,
      review: v.review[0].text,
    }));

  useEffect(() => {
    setNewArry(data);
  }, []);

  console.log(newArry);

  return (
    <>
      <CardWrapper>
        {/* <div>{newArry && newArry.map((items) => <div>{items}</div>)}</div> */}
      </CardWrapper>
    </>
  );
};

export default ReviewCardMap;
