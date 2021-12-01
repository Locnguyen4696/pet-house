import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Search from "./Search";
import WhyUs from "./WhyUs";
import Room from "./Room";
import Review from "./Review";
import ContactUs from "./ContactUs";
const Wrapper = styled.div``;

export default function Home() {
  return(
    <Wrapper>
      <Banner/>
      <Search/>
      <WhyUs/>
      <Room/>
      <Review/>
      <ContactUs/>
    </Wrapper>
  );
}