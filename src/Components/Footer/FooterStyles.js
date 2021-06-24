import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 45px;
  margin: 20px 20px;
  margin: 0 auto;
`;

export const FooterTitle = styled.div`
  font-size: 16px;
  color: #d22424;
  font-weight: 700;
  overflow-wrap: normal;
  margin-bottom: 10px;
`;
export const FooterSubTitle = styled.a`
  list-style-type: none;
  font-size: 14px;
  color: #106fa9;
  cursor: pointer;
  max-width: 200px;
  margin-bottom: 5px;
  font-weight: 400;
`;
