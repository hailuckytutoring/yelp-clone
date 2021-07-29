import React, { Suspense } from "react";
import Header from "../Components/Header/Header";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import ReviewCard from "../Components/ReviewCard/ReviewCard";
import AppBanner from "../Components/AppBanner/AppBanner";
import Footer from "../Components/Footer/Footer";
import ReviewCardMap from "../Components/ReviewCards/ReviewCardMap";
import ReviewMainCard from "../Components/ReviewCards/ReviewMainCard";

const Home = () => {
  return (
    <>
      <Header />
      <ReviewMainCard />

      <HeroBanner />
      <AppBanner />
      {/* <RequestTest /> */}
      <Footer />
    </>
  );
};

export default Home;
