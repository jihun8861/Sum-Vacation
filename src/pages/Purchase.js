import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const Container = styled.div`
  width: 100%;
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

const FrameWrapper = styled.div`
  width: 100%;
  height: 80%;
  border: solid 1px;
  display: flex;
  justify-content: space-between;
`;

const ImageFrame = styled.div`
  width: 45%;
  height: 100%;
  border: solid 1px;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
`;

const TextFrame = styled.div`
  width: 45%;
  height: 100%;
  border: solid 1px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 14px;
  border: solid 1px;
  color: ${(props) => props.color}; // 색상을 받아와서 적용
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  border: solid 1px;
`;

const Line = styled.hr`
  border: solid 1px #e5e5e5;
  margin: 50px 0 30px 0;
`;

const Title2 = styled.div`
  font-size: 32px;
  font-weight: bold;
  border: solid 1px;
  color: ${(props) => props.color}; // 색상을 받아와서 적용
`;

const DetailFrame = styled.div`
  width: 100%;
  height: auto;
  border: solid 1px;
  margin-top: 40px;
  font-size: 18px;
`

const BtnFrame = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`

const PurchaseBtn = styled.button`
  width: 30%;
  height: 100%;
`

const TestBtn = styled.button`
  width: 30%;
  height: 100%;
`

const Test2Btn = styled.button`
  width: 30%;
  height: 100%;
`

const PurchaseContent = () => {
  const location = useLocation();
  const { image, text, price, text2, color, details } = location.state || {};

  return (
    <Container>
      <Frame>
        <FrameWrapper>
          <ImageFrame image={image} />
          <TextFrame>
            <Title>{text}</Title>
            <Price>
              {new Intl.NumberFormat("ko-KR", {
                currency: "KRW",
                minimumFractionDigits: 0,
              }).format(price)}
              원
            </Price>
            <Line />
            <Title2 color={color}>{text2}</Title2>
            <DetailFrame>
            {details && details.map((detail, index) => (
              <div key={index}>- {detail}</div>
            ))}
            </DetailFrame>
            <BtnFrame>
              <PurchaseBtn>구매하기</PurchaseBtn>
              <TestBtn>테스트 버튼</TestBtn>
              <Test2Btn>테스트 버튼</Test2Btn>
            </BtnFrame>
          </TextFrame>
        </FrameWrapper>
      </Frame>
    </Container>
  );
};

const Purchase = () => {
  return <Layout isHome={false} children={<PurchaseContent />} />;
};

export default Purchase;
