import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  width: 100%;
  height: 700px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/test.png");
  background-size: 100% 100%;
`;

const Frame = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomContent = () => {
  return (
    <Container>
      <Frame>
        
      </Frame>
    </Container>
  );
};

const Custom = () => {
  return <Layout isHome={false} children={<CustomContent />} />;
};

export default Custom;