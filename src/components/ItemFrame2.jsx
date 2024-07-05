import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 350px;
  border: solid 1px;
  cursor: pointer;
  border: solid 1px;
`;

const ImageFrame2 = styled.div`
  width: 100%;
  height: 300px;
  border: solid 1px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const TextFrame2 = styled.div`
  width: 100%;
  height: 50px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text2 = styled.div`
  border: solid 1px;
`;

const ItemFrame2 = ({ image, text }) => {
  return (
    <Container>
      <ImageFrame2 image={image} />
      <TextFrame2>
        <Text2>{text}</Text2>
      </TextFrame2>
    </Container>
  );
};

export default ItemFrame2;