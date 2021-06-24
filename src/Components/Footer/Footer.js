import React from "react";
import {
  Wrapper,
  Container,
  ContainerColumn,
  FooterTitle,
  FooterSubTitle,
} from "./FooterStyles";

import { FooterItems } from "./FooterItems";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ContainerColumn>
          <FooterTitle>About</FooterTitle>
          <FooterSubTitle>About Yelp</FooterSubTitle>
          <FooterSubTitle>Careers</FooterSubTitle>
          <FooterSubTitle>Press</FooterSubTitle>
          <FooterSubTitle>Investor Relations</FooterSubTitle>
          <FooterSubTitle>Content Guidelines</FooterSubTitle>
          <FooterSubTitle>Privacy Policy</FooterSubTitle>
        </ContainerColumn>
        <ContainerColumn>
          <FooterTitle>Discover</FooterTitle>
          <FooterSubTitle>Yelp Project Cost Guides</FooterSubTitle>
          <FooterSubTitle>Collections</FooterSubTitle>
          <FooterSubTitle>Talk</FooterSubTitle>
          <FooterSubTitle>Events</FooterSubTitle>
          <FooterSubTitle>The Local Yelp</FooterSubTitle>
          <FooterSubTitle>Developers</FooterSubTitle>
          <FooterSubTitle>Support</FooterSubTitle>
        </ContainerColumn>
        <ContainerColumn>
          <FooterTitle>Yelp for Business</FooterTitle>
          <FooterSubTitle>Claim your Business Page</FooterSubTitle>
          <FooterSubTitle>Advertise on Yelp</FooterSubTitle>
          <FooterSubTitle>Table Management</FooterSubTitle>
          <FooterSubTitle>Business Success Stories</FooterSubTitle>
          <FooterSubTitle>Business Support</FooterSubTitle>
        </ContainerColumn>
      </Container>
    </Wrapper>
  );
};

export default Footer;
