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
  console.log(resData);
  return (
    <>
      <CardWrapper>
        {items &&
          items.map((item) => (
            <CardContainer>
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

              {resData.map((i) => (
                <ReviewParagraphContainer>
                  <ParaGraphMain>{i.review}</ParaGraphMain>
                </ReviewParagraphContainer>
              ))}
            </CardContainer>
          ))}
      </CardWrapper>
    </>
  );
};

export default ReviewCardDetails;
