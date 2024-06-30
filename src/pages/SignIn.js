import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const SignInContent = () => {
  return(
    <>
     <Container>
        로그인 페이지
      </Container>
    </>
  )
}

const SignIn = () => {
  return <Layout props={<SignInContent/>}/>;
}

export default SignIn;