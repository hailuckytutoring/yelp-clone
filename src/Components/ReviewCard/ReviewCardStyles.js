import styled from "styled-components/macro";

import { AiFillStar } from "react-icons/ai";

export const CardWrapper = styled.div`
  display: flex;
  max-width: 990px;
  margin: 5px auto;
  padding: 0 15px;
  /* background-color: lightseagreen; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 370px;
  width: 280px;
  background-color: white;
  margin: 10px;
  outline: 1.5px solid #e5e5e5;
  overflow: auto;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 5px 10px;
`;

export const CardTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #0073bb;
`;

export const CardSubTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
`;

export const ImageContainer = styled.div`
  height: 115px;
  background-color: red;
  width: 100%;
`;

export const ImageMain = styled.div`
  height: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${`https://s3-media0.fl.yelpcdn.com/bphoto/5rduMXcw9rpYvmJam5zG-g/o.jpg`});
`;
export const ResNameTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #0073bb;
`;

export const ResNameTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 5px 10px;
`;

export const RatingContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
`;

export const StarIcon = styled(AiFillStar)`
  color: #d22424;
  cursor: pointer;
`;

export const ReviewParagraphContainer = styled.div`
  width: 100%;
  height: 35%;
  padding: 5px 10px;
  text-align: left;
`;

export const ParaGraphMain = styled.p`
  text-overflow: ellipsis;
`;

export const ReadButton = styled.button`
  color: #0073bb;
  font-weight: 600;
  font-size: 14px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 21px;
  color: #d32323;
  text-align: center;
  margin-top: 35px;
`;

export const HeaderTileMain = styled.div`
  color: #d22424;
  font-weight: 700;
  font-size: 21px;
`;
