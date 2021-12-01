import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Search from "./Search";
import WhyUs from "./WhyUs";
import Room from "./Room";
const Wrapper = styled.div``;

export default function Home() {
  return(
    <Wrapper>
      <Banner/>
      <Search/>
      <WhyUs/>
      <Room/>
    </Wrapper>
  );
}