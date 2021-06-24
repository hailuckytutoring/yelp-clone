import React, { useState } from "react";
import {
  Wrapper,
  BannerTitleContainer,
  BannerTitle,
  BannerWrapper,
  BannerContainer,
  AdPicture,
  TextAlert,
} from "./AppBannerStyles";
import mobileimg1 from "../../Assets/mobileimg1.png";
import mobileimg2 from "../../Assets/mobileimg2.png";

const AppBanner = () => {
  const [mouseOver, setMouseOver] = useState(false);

  const stylesMain = {
    boxShadow: "1px 1px 12px rgba(156, 156, 156, 0.4)",
  };
  const cardClassname = (index) => {
    if (index === mouseOver) {
      return stylesMain;
    } else {
      return null;
    }
  };

  return (
    <>
      <BannerTitleContainer>
        <BannerTitle>Yelp Mobile Apps</BannerTitle>
      </BannerTitleContainer>
      <Wrapper>
        <BannerWrapper>
          <BannerContainer
            style={cardClassname(0)}
            onMouseOver={() => setMouseOver(0)}
            onMouseOut={() => setMouseOver(null)}
          >
            <TextAlert>iPhone,Ipad, Watch</TextAlert>
            <AdPicture src={mobileimg2} />
          </BannerContainer>
          <BannerContainer
            style={cardClassname(1)}
            onMouseOver={() => setMouseOver(1)}
            onMouseOut={() => setMouseOver(null)}
          >
            <TextAlert>Android</TextAlert>
            <AdPicture src={mobileimg1} />
          </BannerContainer>
        </BannerWrapper>
      </Wrapper>
    </>
  );
};

export default AppBanner;
