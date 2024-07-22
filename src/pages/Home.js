import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes, css } from "styled-components";
import Layout from "../components/Layout";
import TextFrame from "../components/TextFrame";
import ItemFrame1 from "../components/ItemFrame1";
import ItemFrame2 from "../components/ItemFrame2";
import ItemFrame3 from "../components/ItemFrame3";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

// 스타일 및 애니메이션 정의
const Container = styled.div`
  width: 1500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
  }
`;

const Frame1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  p {
    font-size: 18px;
    color: #888888;
  }

  &.visible {
    animation: ${slideUp} 1s forwards;
    opacity: 1;
  }
    border: solid 1px;
`;

const Frame2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px;
`;

const Frame3 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  border: solid 1px;
`;

const ItemFrame2Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ArrowIconFront = styled(MdArrowForwardIos)`
  font-size: 30px;
  cursor: pointer;
  bottom: 30px;
  position: relative;
`;

const ArrowIconBack = styled(MdArrowBackIosNew)`
  font-size: 30px;
  cursor: pointer;
  bottom: 30px;
  position: relative;
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
  background-color: ${({ isActive }) => (isActive ? "#6d8cff" : "lightgrey")};
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
  margin-bottom: 60px;

  &:hover {
    background-color: #6d8cff;
  }
`;

const HomeContent = () => {
  const items1 = [
    { image: "/images/test0.jpg", text: "Test 1" },
    { image: "/images/test0.jpg", text: "Test 2" },
    { image: "/images/test0.jpg", text: "Test 3" },
  ];

  const items2 = [
    {
      image: "/images/keyboard1.png",
      hoverImage: "/images/keyboard1-1.png",
      text: "몬스타기어 YAONG67 야옹67 아크릴 키보드",
      price: 139000,
    },
    {
      image: "/images/keyboard2.png",
      hoverImage: "/images/keyboard2-1.png",
      text: "몬스타기어 닌자87PRO ALU 스페셜 에디션 풀알루미늄 커스텀 키보드",
      price: 250000,
    },
    {
      image: "/images/keyboard3.png",
      hoverImage: "/images/keyboard3-1.png",
      text: "[공장풀윤활] 몬스타기어 닌자96PRO LCD (Ver.게이트론)",
      price: 169000,
    },
    {
      image: "/images/keyboard4.png",
      hoverImage: "/images/keyboard4-1.png",
      text: "[수제풀윤활] 몬스타기어 닌자 104PRO LCD (Ver.게이트론)",
      price: 199000,
    },
    {
      image: "/images/keyboard5.png",
      hoverImage: "/images/keyboard5-1.png",
      text: "[공장풀윤활] 클래식TKL 아크릴 커스텀 기계식키보드(Ver.Gateron)",
      price: 199000,
    },
    {
      image: "/images/keyboard6.png",
      hoverImage: "/images/keyboard6-1.png",
      text: "몬스타기어 닌자87PRO V2 G(Ver.게이트론)",
      price: 99500,
    },
    {
      image: "/images/keyboard7.png",
      hoverImage: "/images/keyboard7-1.png",
      text: "몬스타기어 네모67 커스텀 키보드",
      price: 159000,
    },
    {
      image: "/images/keyboard8.png",
      hoverImage: "/images/keyboard8-1.png",
      text: "FEKER 앨리스98 LCD 키보드",
      price: 220000,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(items2.length / itemsPerPage);

  useEffect(() => {
    if (slideDirection) {
      const timeout = setTimeout(() => {
        setSlideDirection(null);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [slideDirection]);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < items2.length) {
      setSlideDirection("left");
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setSlideDirection("right");
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleRadioClick = (index) => {
    if (index * itemsPerPage > currentIndex) {
      setSlideDirection("left");
    } else if (index * itemsPerPage < currentIndex) {
      setSlideDirection("right");
    }
    setCurrentIndex(index * itemsPerPage);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.08,
  });

  return (
    <Container>
      <Frame1 ref={ref} className={inView ? "visible" : ""}>
        <TextFrame>Tabs</TextFrame>
        <p>3D Custom Keyboard</p>
        <ItemFrame3 />
      </Frame1>

      <Frame2>
        {items1.map((item, index) => (
          <ItemFrame1 key={index} image={item.image} text={item.text} />
        ))}
      </Frame2>

      <TextFrame>Popular Product</TextFrame>
      <Frame3>
        <ArrowIconBack onClick={handlePrev} />
        <ItemFrame2Wrapper slideDirection={slideDirection}>
          {items2
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((item, index) => (
              <ItemFrame2
                key={currentIndex + index}
                image={item.image}
                hoverImage={item.hoverImage}
                text={item.text}
                price={item.price}
              />
            ))}
        </ItemFrame2Wrapper>
        <ArrowIconFront onClick={handleNext} />
      </Frame3>
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
  );
};

const Home = () => {
  return <Layout isHome={true} children={<HomeContent />} />;
};

export default Home;
