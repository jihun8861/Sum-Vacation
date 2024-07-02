import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import TextFrame from "../components/TextFrame";
import ItemFrame1 from "../components/ItemFrame1";
import ItemFrame2 from "../components/ItemFrame2";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Container = styled.div`
  width: 1550px;
  height: 100%;
  display: flex-box;
  align-items: center;
  flex-direction: column;
`;

const Frame1 = styled.div`
  width: 1550px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Frame2 = styled.div`
  width: 1550px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 20px;
`;

const ArrowIconFront = styled(IoIosArrowForward)`
  font-size: 24px;
`;

const ArrowIconBack = styled(IoIosArrowBack)`
  font-size: 24px;
`;

const HomeContent = () => {
  return (
    <Container>
      <Banner />

      <Frame1>
        {[...Array(3)].map((_, index) => (
          <ItemFrame1 key={index} />
        ))}
      </Frame1>

      <TextFrame>Popular Product</TextFrame>

      <Frame2>
        <ArrowIconBack />
        {[...Array(4)].map((_, index) => (
          <ItemFrame2 key={index} />
        ))}
        <ArrowIconFront />
      </Frame2>
    </Container>
  );
};

const Home = () => {
  return <Layout props={<HomeContent />} />;
};

export default Home;
