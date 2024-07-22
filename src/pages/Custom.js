import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  width: 1500px;
  height: 700px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  width: 80%;
  height: 100%;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomContent = () => {
  return (
    <Container>
      <Frame>커스텀 페이지입니다.</Frame>
    </Container>
  );
};

const Custom = () => {
  return <Layout isHome={false} children={<CustomContent />} />;
};

export default Custom;