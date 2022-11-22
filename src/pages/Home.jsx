import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

import styled from "styled-components";
import { mobile } from "../responsive";
import GeneralInfo from "../components/GeneralInfo";

const Heading = styled.div`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  font-size: 50px;
  margin-left : 24px;
  margin-top : 24px;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Heading>Popular Products</Heading>
      <Products/>
      <GeneralInfo/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
