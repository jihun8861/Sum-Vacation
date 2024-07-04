import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import TextFrame from "../components/TextFrame";
import ItemFrame1 from "../components/ItemFrame1";
import ItemFrame2 from "../components/ItemFrame2";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const Container = styled.div`
  width: 1500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Frame1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Frame2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const ArrowIconFront = styled(MdArrowForwardIos)`
  font-size: 30px;
  cursor: pointer;
`;

const ArrowIconBack = styled(MdArrowBackIosNew)`
  font-size: 30px;
  cursor: pointer;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const RadioButton = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ isActive }) => (isActive ? '#6d8cff' : 'lightgrey')};
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #6d8cff;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("/images/banner.png");
  background-size: 100% 100%;
  background-position: center;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeContent = () => {
  const items1 = [
    { image: "/images/test0.jpg", text: "Test 1" },
    { image: "/images/test0.jpg", text: "Test 2" },
    { image: "/images/test0.jpg", text: "Test 3" },
  ];

  const items2 = [
    { image: "/images/keyboard1.png", text: "Keyboard 1" },
    { image: "/images/keyboard2.png", text: "Keyboard 2" },
    { image: "/images/keyboard3.png", text: "Keyboard 3" },
    { image: "/images/keyboard4.png", text: "Keyboard 4" },
    { image: "/images/keyboard5.png", text: "Keyboard 5" },
    { image: "/images/keyboard6.jpg", text: "Keyboard 6" },
    { image: "/images/keyboard7.png", text: "Keyboard 7" },
    { image: "/images/keyboard8.jpg", text: "Keyboard 8" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(items2.length / itemsPerPage);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < items2.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleRadioClick = (index) => {
    setCurrentIndex(index * itemsPerPage);
  };

  return (
    <>
    <Container>
      <Frame1>
        {items1.map((item, index) => (
          <ItemFrame1 key={index} image={item.image} text={item.text} />
        ))}
      </Frame1>
      <TextFrame>Popular Product</TextFrame>
      <Frame2>
        <ArrowIconBack onClick={handlePrev} />
        {items2.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
          <ItemFrame2 key={index} image={item.image} text={item.text} />
        ))}
        <ArrowIconFront onClick={handleNext} />
      </Frame2>
      <RadioButtonContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <RadioButton
            key={index}
            isActive={currentIndex / itemsPerPage === index}
            onClick={() => handleRadioClick(index)}
          />
        ))}
      </RadioButtonContainer>
    </Container>
    </>
  );
};

const Home = () => {
  return <Layout props={<HomeContent />} />;
};

export default Home;
