import React from "react";
import Header from "../Components/Header/Header";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import ReviewCard from "../Components/ReviewCard/ReviewCard";
import AppBanner from "../Components/AppBanner/AppBanner";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <ReviewCard />
      <HeroBanner />
      <AppBanner />
      <Footer />
    </>
  );
};

export default Home;
