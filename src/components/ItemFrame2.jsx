import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 320px;
  height: 380px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const ImageFrame2 = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease;
`;

const TextFrame2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 10px;
`;

const Text2 = styled.div`
  font-size: 16px;
`;

const PriceFrame = styled.div`
  width: 100%;
  height: auto;
  font-size: 18px;
  font-weight: 600;
  padding-top: 5px;
`

const ItemFrame2 = ({ image, hoverImage, text, price }) => {
  const [currentImage, setCurrentImage] = useState(image);

  const handleMouseEnter = () => {
    setCurrentImage(hoverImage);
  };

  const handleMouseLeave = () => {
    setCurrentImage(image);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR', {
      currency: 'KRW',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <Container>
      <ImageFrame2
        image={currentImage}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <TextFrame2>
        <Text2>{text}</Text2>
      </TextFrame2>
      <PriceFrame>{formatPrice(price)}원</PriceFrame>
    </Container>
  );
};

export default ItemFrame2;
