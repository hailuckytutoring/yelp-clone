import React from "react";
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
  ReviewParagraphContainer,
  ParaGraphMain,
} from "./ReviewCardStyles";

const ReviewCardDetails = ({ items, resData }) => {
  console.log(items, resData);

  const getReviewbyIndex = (item_index) => {
    let correspondingReview;
    resData.forEach((res, res_index) => {
      if (res_index === item_index) correspondingReview = res.review;
    });
    return correspondingReview;
  };

  return (
    <>
      <CardWrapper>
        {items &&
          items.map((item, item_index) => (
            <CardContainer key={item_index}>
              <div>
                <>
                  <CardTitleContainer>
                    <CardTitle>{item.name}</CardTitle>

                    <CardSubTitle>Wrote a review</CardSubTitle>
                  </CardTitleContainer>

                  <ImageContainer>
                    <ImageMain bg={item.photos} />
                  </ImageContainer>

                  <ResNameTitleContainer>
                    <ResNameTitle>{item.review}</ResNameTitle>
                  </ResNameTitleContainer>
                </>
              </div>

              <ReviewParagraphContainer>
                <ParaGraphMain>{getReviewbyIndex(item_index)}</ParaGraphMain>
              </ReviewParagraphContainer>
            </CardContainer>
          ))}
      </CardWrapper>
    </>
  );
};

export default ReviewCardDetails;
