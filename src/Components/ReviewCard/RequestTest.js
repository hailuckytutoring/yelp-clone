import React, { useState, useEffect, useContext } from "react";
import MainContext from "../../Context/MainContext";

import { useQuery, gql } from "@apollo/client";
import { GET_REVIEWS } from "../../Context/types";

const RequestTest = () => {
  const [reviewId, setReviewId] = useState([]);
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
      Rev1: reviews(business: $business) {
        total
        review {
          text
          rating
        }
      }
      Rev2: reviews(business: $business2) {
        total
        review {
          text
          rating
        }
      }
    }
  `;

  let qVars = {
    business: "WavvLdfdP6g8aZTtbBQHTw", // <===Replace with ids passed to state
    business2: "wGl_DyNxSv8KUtYgiuLhmA",
  };

  const { error, loading, data } = useQuery(REVIEWS_FETCH, {
    variables: qVars,
  });

  if (loading) {
    return <div>Loading...</div>; /// Change to loader gif
  }

  if (error) {
    return <div>Error...</div>;
  }

  console.log(data);

  if (!items) return <div></div>;

  return (
    <div>
      {/* {reviewData_2.data &&
        Object.values(reviewData_2.data).map((item) => (
          <p>{item.review.text}</p>
        ))} */}
    </div>
  );
};

export default RequestTest;

// const reviewId_1 = {
//   business: reviewId[0],
// };

// const reviewId_2 = {
//   business: reviewId[1],
// };
// const reviewId_3 = {
//   business: reviewId[2],
// };

// const REVIEW_ITEMS = gql`
//     query REVIEWS2($business: String!, $business2: String!) {
//       reviews(business: $business) {
//         total
//         review {
//           text
//           rating
//         }
//       }
//       reviews(business: $business2) {
//         total
//         review {
//           text
//           rating
//         }
//       }
//     }
//   `;

//   const review2 = gql`
//     query REVIEWS1($business: String!) {
//       reviews(business: $business) {
//         total
//         review {
//           text
//           rating
//         }
//       }
//     }
//   `;
//   const review3 = gql`
//     query GET_REVIEWS($business: String!) {
//       reviews(business: $business) {
//         total
//         review {
//           text
//           rating
//         }
//       }
//     }
//   `;

//   const reviewTest = gql`
//     {
//       REV: reviews(business: $business:String!) {
//         total
//         review {
//           text
//         }
//       }
//     }
//   `;

// const { loading, error, data } = useQuery(REVIEW_ITEMS, {
//   variables: reviewId_1,
// });

// console.log(data, error);

// const { loading, error, data } = useQuery(mutatio, { variables: variabless });

// const reviewData_1 = useQuery(REVIEW_ITEMS, {
//   variables: reviewId_1,
// });
// const reviewData_2 = useQuery(review2, { variables: reviewId_2 });
// const reviewData_3 = useQuery(review3, { variables: reviewId_3 });

// const errors = reviewData_1 || reviewData_2 || reviewData_3;
// const loading = reviewData_1 || reviewData_2 || reviewData_3;

// if (loading) {
//   return <p>Loading...</p>;
// }

// console.log(reviewData_2.data);
// console.log(reviewData_1.data);

// const mutatio = gql`
//         {

//             review_1: reviews(business: {reviewId[0]}) {
//               total
//               review {
//                 text
//               }
//             }

//           }

//         }
//       `;
