import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 350px;
  border: solid 1px;
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 80%;
  border: solid 1px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 20%;
  border: solid 1px;
`;

const ItemFrame2 = () => {
  return (
    <Container>
      <ImageFrame />
      <TextContainer />
    </Container>
  );
};

export default ItemFrame2;
