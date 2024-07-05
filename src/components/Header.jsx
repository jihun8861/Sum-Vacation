import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { RiUserLine } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  height: 100px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: top 0.5s ease-in-out, background-color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
  background-color: ${(props) => (props.atTop ? "transparent" : "white")};
  border-bottom: ${(props) => (props.isHome ? "none" : "1px solid #e8e8e8")};
`;

const Frame = styled.div`
  width: 1600px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Section1 = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    width: 80%;
  }
`;

const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  color: ${(props) => (props.atTop ? "white" : "black")};
  margin-left: 0px;
`;

const UserIcon = styled(RiUserLine)`
  font-size: 25px;
  cursor: pointer;
  color: ${(props) => (props.atTop ? "white" : "black")};
`;

const BasketIcon = styled(SlBasket)`
  font-size: 25px;
  cursor: pointer;
  color: ${(props) => (props.atTop ? "white" : "black")};
`;

const SearchIcon = styled(IoSearchOutline)`
  font-size: 25px;
  cursor: pointer;
  color: ${(props) => (props.atTop ? "white" : "black")};
`;

const LinkStyle = (atTop) => ({
  textDecoration: "none",
  color: atTop ? "white" : "black",
});

const Header = ({ isHome }) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(isHome);

  const handleScroll = () => {
    if (!isHome) return;
    const currentScrollY = window.scrollY;
    setAtTop(currentScrollY === 0);
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setHidden(true);
    } else if (currentScrollY < lastScrollY) {
      setHidden(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setAtTop(false);
    }
  }, [isHome, lastScrollY]);

  return (
    <Container hidden={hidden} atTop={atTop} isHome={isHome}>
      <Frame>
        <Section1>
          <Logo>
            <a href="/" style={LinkStyle(atTop)}>
              <img src="/images/logo2.png" alt="Logo" />
            </a>
          </Logo>
        </Section1>

        <Spacer />

        <Section2 atTop={atTop}>
          <h4>고객지원</h4>
        </Section2>

        <Section2 atTop={atTop}>
          <SearchIcon atTop={atTop} />
        </Section2>

        <Section2 atTop={atTop}>
          <a href="SignIn" style={LinkStyle(atTop)}>
            <UserIcon atTop={atTop} />
          </a>
        </Section2>

        <Section2 atTop={atTop}>
          <BasketIcon atTop={atTop} />
        </Section2>
      </Frame>
    </Container>
  );
};

export default Header;
