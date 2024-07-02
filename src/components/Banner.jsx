import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("/images/banner.png");
  background-size: cover;
  background-position: center;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Banner = () => {
  return (
    <Container />
  );
}

export default Banner;
