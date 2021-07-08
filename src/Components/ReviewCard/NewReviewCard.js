import React, { useState, useEffect, useContext } from "react";
import MainContext from "../../Context/MainContext";
import { IoMailUnread } from "react-icons/io5";

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

const NewReviewCard = ({ item, main }) => {
  const [showInfo, setShowInfo] = useState(false);

  const context = useContext(MainContext);

  const { items } = context;

  const toggleHide = (index) => {
    setShowInfo({ ...showInfo, [index]: !showInfo[index] });
  };

  return (
    <>
      <>
        {item &&
          item.slice(0, 1).map((items, i) => (
            <CardContainer>
              <CardTitleContainer>
                <CardTitle>{items.user.name}</CardTitle>
                <div>{items.url}</div>
                <CardSubTitle>Wrote a review</CardSubTitle>
              </CardTitleContainer>

              <ImageContainer>
                <ImageMain />
              </ImageContainer>
              <ResNameTitleContainer>
                <ResNameTitle>name</ResNameTitle>
              </ResNameTitleContainer>

              <ReviewParagraphContainer key={i}>
                <ParaGraphMain key={items.id}>
                  {!!showInfo[i] && showInfo
                    ? items.text
                    : `${items.text.slice(0, 100)}`}
                </ParaGraphMain>

                <ReadButton onClick={() => toggleHide(i)}>
                  {showInfo[i] ? "Read less" : "Continue reading"}
                </ReadButton>
              </ReviewParagraphContainer>
            </CardContainer>
          ))}
      </>
    </>
  );
};

export default NewReviewCard;
