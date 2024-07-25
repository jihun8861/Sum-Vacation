import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/banner.png");
  background-size: 100% 100%;
  background-position: center;
`;

const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const TopArrow = styled.div`
  position: fixed;
  border: solid 1px;
  width: 50px;
  height: 50px;
  right: 20px;
  bottom: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  &:hover {
    background: #6d8cff;
    color: white;
    border: none;
  }
`;

const TopArrowIcon = styled(FaArrowUp)`
  font-size: 16px;
`;

const Share = styled.div`
  position: fixed;
  border: solid 1px;
  width: 50px;
  height: 50px;
  right: 20px;
  bottom: 120px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  &:hover {
    background: #6d8cff;
    color: white;
    border: none;
  }
`;


const Layout = ({ isHome, children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container>
        {isHome && <BannerContainer />}
        <Header isHome={isHome} />
        <Main>
          {children}
          <TopArrow onClick={scrollToTop}>
            <TopArrowIcon />
          </TopArrow>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;