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
  RatingContainer,
  ReviewParagraphContainer,
  ParaGraphMain,
  ReadButton,
  StarIcon,
  TitleContainer,
  HeaderTileMain,
} from "./ReviewCardStyles";
import ReviewMap from "./ReviewMap";

const ReviewCardTest = ({ details, item }) => {
  console.log(item);
  return (
    <CardWrapper>
      <CardContainer>
        <CardTitleContainer>
          <CardSubTitle>{item.id}</CardSubTitle>
        </CardTitleContainer>
        <ImageContainer>
          <ImageMain />
        </ImageContainer>
        <ResNameTitleContainer>
          <ResNameTitle></ResNameTitle>
        </ResNameTitleContainer>
      </CardContainer>
    </CardWrapper>
  );
};

export default ReviewCardTest;
