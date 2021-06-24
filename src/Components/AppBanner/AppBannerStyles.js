import styled from "styled-components";
import mobileimg1 from "../../Assets/mobileimg1.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  /* background-color: lightslategray; */
  display: flex;
`;

export const BannerTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const BannerTitle = styled.div`
  font-weight: 700;
  font-size: 21px;
  color: #d32323;
  text-align: center;
  margin-top: 40px;
`;
export const TextAlert = styled.div`
  align-self: center;
  font-weight: 700;
  font-size: 14px;
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 990px;
  /* background-color: red; */
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  outline: 1px solid #e5e5e5;
  padding: 30px 0px;
  cursor: pointer;
  max-width: 990px;
  margin: 5px 15px;
  flex-direction: column;
  /* background-color: red; */
`;

export const AdPicture = styled.img`
  height: 100%;
  width: 60%;
  align-self: center;
`;

// box-shadow: 1px 1px 12px rgba(156, 156, 156, 0.4)
// 	-webkit-box-shadow: 1px1 1px 12px rgba(156, 156, 156, 0.4)
// 	-moz-box-shadow: 1px 1px 12px rgba(156, 156, 156, 0.4)

// style={{
//   boxShadow: mouseOver
//     ? "1px 1px 12px rgba(156, 156, 156, 0.4)"
//     : "white",
// }}
