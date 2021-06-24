import React, { useState } from "react";
import {
  BannerWrapper,
  HeaderText,
  HeaderContainer,
  IconTileContainer,
  TileMain,
  IconMain,
  TiteTitle,
  RestaurantItems,
} from "./HeroBannerStyles";

const HeroBanner = () => {
  const [mouseHover, setmouseHover] = useState(null);

  const stylesMain = {
    boxShadow: "1px 1px 12px rgba(156, 156, 156, 0.4)",
  };

  const cardClassname = (index) => {
    if (index === mouseHover) {
      return stylesMain;
    } else {
      return null;
    }
  };

  return (
    <BannerWrapper>
      <HeaderContainer>
        <HeaderText>Browse Businesses by Category</HeaderText>
      </HeaderContainer>
      <IconTileContainer>
        {RestaurantItems.map((items, i) => {
          return (
            <TileMain
              key={items.id}
              onMouseOver={() => setmouseHover(i)}
              onMouseLeave={() => setmouseHover(null)}
              style={cardClassname(i)}
            >
              <IconMain src={items.img} />
              <TiteTitle>{items.title}</TiteTitle>
            </TileMain>
          );
        })}
      </IconTileContainer>
    </BannerWrapper>
  );
};

export default HeroBanner;
