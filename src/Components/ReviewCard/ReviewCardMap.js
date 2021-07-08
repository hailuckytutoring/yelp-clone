import React, { useState, useEffect, useContext } from "react";
import MainContext from "../../Context/MainContext";
import NewReviewCard from "./NewReviewCard";
import styled from "styled-components";

import { request, GraphQLClient, gql } from "graphql-request";

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

  const { getReviews, reviews, items } = context;

  const [reviewId, setReviewId] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (items) {
      setReviewId(
        items.slice(0, 3).map((keys) => {
          return keys.id;
        })
      );
    } else {
      return undefined;
    }
  }, []);
  const endpoint =
    "https://mycorsproxybypass.herokuapp.com/https://api.yelp.com/v3/graphql";

  const variables = {
    business: "WavvLdfdP6g8aZTtbBQHTw",
    business2: "WavvLdfdP6g8aZTtbBQHTw",
  };

  const GET_REVIEWS = gql`
        query GET_REVIEWS($business: {String!},$business2: {String!}) {
          reviews(business: $business) {
            total
            review {
              text
            }
          }
          
        }

        query GET_REVIEWS($business2: {String!} {
            reviews2(business: $business2) {
              total
              review {
                text
              }
            }
            
          }
      `;

  const client = new GraphQLClient(endpoint, {
    headers: {
      headers: {
        authorization:
          "Bearer mnle5EXoFYtyyMzH3dsFwpbf90dzZb8qfnVABxz6L4FA2kcP8Tj7TiWexYdU_ILiMb-I8Ll5uDenDgtKfGxF5F9YUhAOmGpzHiHrXkcomyxcpv6GCNGdIUCveEjSYHYx",
      },
    },
  });
  client.request(GET_REVIEWS, variables).then((data) => console.log(data));

  //   async function main() {
  //     const endpoint =
  //       "https://mycorsproxybypass.herokuapp.com/https://api.yelp.com/v3/graphql";

  //     const variables = {
  //       business: "WavvLdfdP6g8aZTtbBQHTw",
  //     };

  //     const data = await request(endpoint, GET_REVIEWS, variables);
  //     console.log(JSON.stringify(data, undefined, 2));

  //     console.log(data);
  //   }

  //   main().catch((error) => console.error(error));

  //   const datas = GraphQLClient.request(GET_REVIEWS, variables);

  //   console.log(JSON.stringify(datas, undefined, 2));

  //   const mutatio = gql`
  //       {
  //         review_1: reviews(business: {reviewId[0]}) {
  //           total
  //           review {
  //             text
  //           }
  //         }
  //         review_2: reviews(business: "WavvLdfdP6g8aZTtbBQHTw") {
  //           total
  //           review {
  //             text
  //           }
  //         }

  //         review_3: reviews(business: "WavvLdfdP6g8aZTtbBQHTw") {
  //           total
  //           review {
  //             text
  //           }
  //         }
  //       }
  //     `;

  //   const mutation = gql`
  //     mutation AddMovie($title: String!, $releaseDate: Int!) {
  //       insert_movies_one(object: { title: $title, releaseDate: $releaseDate }) {
  //         title
  //         releaseDate
  //       }
  //     }
  //   `;

  //   let API_KEY =
  //     "mnle5EXoFYtyyMzH3dsFwpbf90dzZb8qfnVABxz6L4FA2kcP8Tj7TiWexYdU_ILiMb-I8Ll5uDenDgtKfGxF5F9YUhAOmGpzHiHrXkcomyxcpv6GCNGdIUCveEjSYHYx";
  //   let endpoint =
  //     "https://mycorsproxybypass.herokuapp.com/https://api.yelp.com/v3/graphql";

  //   const client = new GraphQLClient(endpoint, {
  //     headers: {
  //       Authorization: `Bearer ${API_KEY}`,
  //       "Content-Type": "application/json",
  //       "accept-language": "en_US",
  //     },
  //   });

  //   client.request(query).then((data) => console.log(data));
  //   const variables = {
  //     title: "Inception",
  //     releaseDate: 2010,
  //   };
  //   const datas = await graphQLClient.request(mutation, variables);

  //   console.log(data.review_1);

  if (!data) return <div></div>;
  return (
    <>
      <CardWrapper>
        <NewReviewCard item={data} />
      </CardWrapper>
    </>
  );
};

export default ReviewCardMap;

//   console.log(reviews[0]);

//   const rev = (i) => {
//     Object.values(i).map((key) => {
//       console.log(key[0]);
//       return key[0];
//     });
//   };
//   rev(data);

//wGl_DyNxSv8KUtYgiuLhmA WavvLdfdP6g8aZTtbBQHTw

//   const keys = (i) => {
//     Object.values(i)
//       .slice(0, 3)
//       .map((i) => {
//         console.log(i);
//         return i;
//       });
//   };
//   keys(items);
