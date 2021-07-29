import React, { useState, useEffect, useContext } from "react";
import MainContext from "../../Context/MainContext";

import { useQuery, gql } from "@apollo/client";
import { GET_REVIEWS } from "../../Context/types";

const RequestTest = () => {
  const [reviewId, setReviewId] = useState([]);
  const [itemsMap, setItemsMap] = useState({});
  const context = useContext(MainContext);

  const { items } = context;

  useEffect(() => {
    if (items) {
      const idItems = items.slice(0, 3).map((keys) => {
        return keys.id;
      });
      setReviewId(idItems);
    } else {
      return null;
    }
  }, [items]);

  const REVIEWS_FETCH = gql`
    query GET_REVIEWS($business: String!, $business2: String!) {
      review1: reviews(business: $business) {
        total
        review {
          text
          rating
        }
      }
      review2: reviews(business: $business2) {
        total
        review {
          text
          rating
        }
      }
    }
  `;

  let qVars = {
    business: reviewId[0], // <===Replace with ids passed to state
    business2: reviewId[1],
  };

  const { error, loading, data } = useQuery(REVIEWS_FETCH, {
    variables: qVars,
  });

  let result =
    data &&
    Object.entries(data).map(([k, v]) => ({
      label: k,
      review: v.review[0].text,
    }));

  // useEffect(() => {
  //   if (data) {
  //     Object.keys(data).map((item) => {
  //       console.log(data[item[0]]);
  //     });
  //   }
  // }, [data]);

  if (loading) {
    return <div>Loading...</div>; /// Change to loader gif
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!items) return <div></div>;
  return (
    <div>
      {result &&
        result.map((i) => (
          <div>
            <p>{i.review.text}</p>
          </div>
        ))}
    </div>
  );
};

export default RequestTest;

// const mappedData = () => {
//   const isMapped =
//     data &&
//     Object.values(data)
//       .slice(0, 2)
//       .map((item) => {
//         setItemsMap(item.review[0].text);
//       });
// };
// mappedData();

// console.log(itemsMap);

// const finalMap = () => {};
