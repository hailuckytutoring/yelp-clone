import styled from "styled-components";

export const RestaurantItems = [
  {
    id: 1,
    title: "Restaurants",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png",
  },
  {
    id: 2,
    title: "Shopping",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_shopping@2x.yji-559f23226d9f9f651812ddc5d6e3d1b2.png",
  },
  {
    id: 3,
    title: "Nightlife",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_nightlife@2x.yji-925cd32ac4c934d465c664f140c5b629.png",
  },
  {
    id: 4,
    title: "Active Life",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_active_life@2x.yji-2df9fcd6a68eb739e68a026778dd7a3f.png",
  },
  {
    id: 5,
    title: "Beauty & Spas",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_beauty@2x.yji-3cfb4e602ac139443228f090ec71b84f.png",
  },
  {
    id: 6,
    title: "Automotive",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_automotive@2x.yji-c73bd70791375ec60256243055745f63.png",
  },
  {
    id: 7,
    title: "Home Services",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_home_services@2x.yji-20723ad0e5ee302de563935be68c6638.png",
  },
  {
    title: "More Categories",
    img: "https://s3-media0.fl.yelpcdn.com/assets/public/72x72_more_categories@2x.yji-e7be9a50bf8cf4a2eea9f7d7e2b5f194.png",
  },
];

export const BannerWrapper = styled.div`
  display: flex;
  height: 450px;
  background-color: #f5f5f5;
  margin-top: 50px;
  flex-direction: column;

  @media (max-width: 970px) {
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  /* background-color: green; */
  bottom: 20px;
`;

export const HeaderText = styled.h3`
  font-weight: 700;
  font-size: 21px;
  color: #d32323;
  text-align: center;
  margin: 35px;
`;

export const IconTileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  justify-self: center;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 990px;

  @media (max-width: 970px) {
    width: 100%;
    margin: 0 auto;
  }
  /* background-color: green; */
`;

export const TileMain = styled.div`
  display: flex;
  height: 140px;
  width: 210px;
  background-color: white;
  border: 1.5px solid #e6e6e6;
  text-align: center;
  border-radius: 4px;
  margin: 5px 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const IconMain = styled.img`
  height: 72px;
  width: 72px;
  justify-self: center;
`;

export const TiteTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding: 2px 0;
  margin-top: 2px;
`;
