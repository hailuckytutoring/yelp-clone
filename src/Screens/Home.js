import React from "react";
import Header from "../Components/Header/Header";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import ReviewCard from "../Components/ReviewCard/ReviewCard";
import AppBanner from "../Components/AppBanner/AppBanner";
import Footer from "../Components/Footer/Footer";
import ReviewCardMap from "../Components/ReviewCard/ReviewCardMap";
import RequestTest from "../Components/ReviewCard/RequestTest";

const Home = () => {
  return (
    <>
      <Header />
      <RequestTest />

      <HeroBanner />
      <AppBanner />
      <Footer />
    </>
  );
};

export default Home;
