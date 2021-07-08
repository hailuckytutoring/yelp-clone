import React, { useState, useEffect, useContext } from "react";
import MainContext from "../../Context/MainContext";
import {
  CardWrapper,
  CardContainer,
  CardTitleContainer,
  CardTitle,
  CardSubTitle,
  ImageContainer,
  ImageMain,
  ResNameTitleContainer,
  ResNameTitle,
  RatingContainer,
  ReviewParagraphContainer,
  ParaGraphMain,
  ReadButton,
  StarIcon,
  TitleContainer,
  HeaderTileMain,
} from "./ReviewCardStyles";

const sampleText = `My family went 4 for 4 tonight. We ate around the world, asian,
Mexican, Japanese, and American. Bento, Zukku, Muchachas are now
three of my favorite places to eat in Tampa. We had walked through
Armature Works in the past, but tonight was the first night we ate
there. It is a wonderful setting, one of the rare places where the
inside was just as cool as the waterfront outside. I can't recommend
this place enough. But be warned, it is an amazing place, it will
get crowded. Monday night was pretty packed. It is worth it, just be
ready. This should be a model for cities across the country. This is
truly a Tampa treasure`;

const ReviewCard = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [rating, setRating] = useState(3);
  const [reviewId, setReviewId] = useState([]);

  const context = useContext(MainContext);

  const { getReviews, reviews, items } = context;

  // const onValueChange = () => {
  //   setRating(4);
  // };
  // const randomNumber = Math.round(Math.random() * 5);

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
  }, [items]);

  useEffect(() => {
    getReviews(reviewId[1]);
  }, [reviewId]);

  const isReviewCard = () => {
    setShowInfo(!showInfo);
  };

  if (!items && !reviews) return <div></div>;
  return (
    <>
      <TitleContainer>
        <HeaderTileMain>Recent Activity</HeaderTileMain>
      </TitleContainer>

      <CardWrapper>
        {reviews &&
          reviews.map((items, i) => (
            <CardContainer>
              <CardTitleContainer>
                <CardTitle>{items.user.name}</CardTitle>
                <CardSubTitle>Wrote a review</CardSubTitle>
              </CardTitleContainer>
              <ImageContainer>
                <ImageMain />
              </ImageContainer>
              <ResNameTitleContainer>
                <ResNameTitle>Armature Works</ResNameTitle>
              </ResNameTitleContainer>
              <RatingContainer>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = items.rating;

                  return (
                    <StarIcon
                      value={rating}
                      size={20}
                      color={ratingValue <= rating ? "#d22424" : " #D9D9D9"}
                    />
                  );
                })}
              </RatingContainer>

              <ReviewParagraphContainer>
                <ParaGraphMain>
                  {showInfo ? items.text : `${items.text.substring(0, 110)}`}
                </ParaGraphMain>

                <ReadButton onClick={() => setShowInfo(!showInfo, i)}>
                  Continue reading
                </ReadButton>
              </ReviewParagraphContainer>
            </CardContainer>
          ))}
      </CardWrapper>
    </>
  );
};

export default ReviewCard;

// console.log(items);
// const idArray = [];
// const ids = () => {
//   reviewId.slice(0, 3).map((i) => {
//     console.log(i.id);
//   });
// };
// ids();

// useEffect(() => {
//   setRating(randomNumber);
// }, [randomNumber]);

// console.log(randomNumber);
