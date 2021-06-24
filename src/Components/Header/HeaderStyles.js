import styled from "styled-components";

import logo from "../../Assets/final_asset.svg";

export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  height: 570px;
  align-content: center;
  justify-content: center;
  background-color: #333;
  background-size: cover;
  background-position: 50%;
  background-image: url(${`https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/a2a6dfbdce53/assets/img/home/hero_photos/Y52KtIDZeG8aAMBaLIjSlQ.jpg`});
`;

export const ContainerContent = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  align-self: center;

  /* background-color: lightblue; */
`;

export const MiddleContainer = styled.div`
  font-size: 20px;
  height: 200px;
`;

export const HeroInner = styled.div`
  padding-bottom: 100px;
  margin: 20px auto;
`;

export const HeroLogoContainer = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 160px;
  height: 80px;
  padding: 0;
  margin: 45px 0;
  background-repeat: no-repeat;
  margin: 0px auto;
`;
