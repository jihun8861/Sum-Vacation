import React from "react";
import styled from "styled-components";
import { HiArrowLongRight } from "react-icons/hi2";

const Container = styled.div`
  width: 100%;
  height: 600px;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomSpace = styled.div`
    width: 100%;
    height: 70%;
    border: solid 1px;
`

const CustomBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 60px;
    border: solid 2px #eeeeee;
    border-radius: 40px;
    background: transparent;
    font-weight: bold;
    cursor: pointer;
`

const ArrowIcon = styled(HiArrowLongRight)`
    font-size: 20px;
    margin-left: 10px;
`

const LinkStyle = {
    textDecoration: "none",
    color: "black"
}

const ItemFrame3 = () => {
  return (
    <Container>
      <Frame>
        <CustomSpace>

        </CustomSpace>
        
        <a href="Custom" style={LinkStyle}>
        <CustomBtn>
            커스텀 하러 가기<ArrowIcon/>
        </CustomBtn>
        </a>
      </Frame>
    </Container>
  );
};

export default ItemFrame3;
