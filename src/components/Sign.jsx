import React from "react";
import styled from "styled-components";

const Frame = styled.div`
   width: 100vw;
   height: 100vh;
   position: relative; /* 포지션을 설정하여 자식 요소의 위치를 결정합니다. */
`;

const Wrap = styled.div`
   position: relative;
   max-width: 1200px;
   height: 100%;
   margin: 0 auto;
`;

const LoginIn = styled.div`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   width: 100%;
`;

const LoginCont = styled.div`
   float: left;
   max-width: 500px;
   width: 100%;
   padding: 60px 40px 53px;
   background: #fff;
   border-radius: 20px;
   box-sizing: border-box;
   background-color: red;
`;

const InjeNaraText = styled.div`
   color: #fff;
   display: flex;
   justify-content: center;

   p{
      margin:0;
      padding:0;
      font-size: 50px;
      font-weight: 600;
      margin-left: 20px;
      margin-bottom: 40px;
   }
`;

const LinkStyle = { 
   textDecoration: "none",
   color: "lightsalmon"
};

const Sign = ({ props }) => {
   return (
      <Frame>
         <Wrap>
            <LoginIn>
               <LoginCont>
               <InjeNaraText>
               </InjeNaraText>
                  {props}
               </LoginCont>

            </LoginIn>
         </Wrap>
      </Frame>
   )
}

export default Sign;