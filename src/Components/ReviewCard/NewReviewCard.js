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

const NewReviewCard = ({ item, attr, data }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleHide = (index) => {
    setShowInfo({ ...showInfo, [index]: !showInfo[index] });
  };
  if (!item) return <div></div>;

  return (
    <>
      <>
        <CardContainer>
          <div></div>

          <ResNameTitleContainer>
            <ResNameTitle>{attr.name}</ResNameTitle>
          </ResNameTitleContainer>

          <ReviewParagraphContainer>
            <ParaGraphMain>
              <div>{}</div>
              {/* {revItems &&
                    revItems
                      .slice(0, 1)
                      .map((item) => <div>{item.review}</div>)} */}
              {/* {!!showInfo[i] && showInfo
                    ? revItems[0].text
                    : `${revItems[0].text.slice(0, 100)}`} */}
            </ParaGraphMain>

            <ReadButton onClick={() => toggleHide()}>
              {showInfo ? "Read less" : "Continue reading"}
            </ReadButton>
          </ReviewParagraphContainer>
        </CardContainer>
      </>
    </>
  );
};

export default NewReviewCard;
