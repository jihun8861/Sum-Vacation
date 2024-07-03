import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 32%;
  height: 520px;
  border: solid 1px;
  cursor: pointer;
`;

const ImageFrame1 = styled.div`
  width: 100%;
  height: 70%;
  border: solid 1px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const TextFrame1 = styled.div`
  width: 100%;
  height: 30%;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text1 = styled.div`
    border: solid 1px;
`

const ItemFrame1 = ({image,text}) => {
  return (
    <>
      <Container>
      <ImageFrame1 image={image} />
      <TextFrame1>
        <Text1>{text}</Text1>
      </TextFrame1>
      </Container>
    </>
  );
};

export default ItemFrame1;
