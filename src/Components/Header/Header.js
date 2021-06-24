import React from "react";
import {
  Container,
  ContainerContent,
  MiddleContainer,
  HeroInner,
  HeroLogoContainer,
} from "./HeaderStyles";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <>
      <Container>
        <ContainerContent>
          <HeroInner>
            <HeroLogoContainer />
            <SearchBar />
          </HeroInner>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Header;
