import React from "react";
import Hero from "../components/Home/Hero";
import BrandStripe from "../components/Home/BrandStripe";
import { Box } from "@chakra-ui/react";
import NewArrivals from "../components/Home/NewArrivals";
import TopSelling from "../components/Home/TopSelling";

const Home = () => {
  return (
    <Box>
      <Hero />
      <BrandStripe />
      <NewArrivals />
      <TopSelling />
    </Box>
  );
};

export default Home;
