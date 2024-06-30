import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 390px;
  background-image: url("/images/banner.png");
  background-size: 100% 100%;
`

const Banner = () => {
  return(
    <Container/>
  )
}

export default Banner;