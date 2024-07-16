import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 350px;
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
  height: 60px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text2 = styled.div`
  border: solid 1px;
`;

const ItemFrame2 = ({ image, hoverImage, text }) => {
  const [currentImage, setCurrentImage] = useState(image);

  const handleMouseEnter = () => {
    setCurrentImage(hoverImage);
  };

  const handleMouseLeave = () => {
    setCurrentImage(image);
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
    </Container>
  );
};

export default ItemFrame2;
