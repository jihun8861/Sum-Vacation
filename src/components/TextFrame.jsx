import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 180px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  padding-top: 40px;
  font-family: 'Black Han Sans', sans-serif; /* 폰트 패밀리 설정 */
  font-size: 30px;
`;

const TextFrame = ({ children }) => {
  return (
    <Container>
      <Frame>
        {children}
      </Frame>
    </Container>
  );
};

export default TextFrame;
