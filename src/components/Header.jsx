import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 150px;
  border: solid 1px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: fixed;
  top: 0;
  transition: top 0.5s ease-in-out;
  ${(props) =>
    props.hidden &&
    css`
      top: -150px;
    `}
`;

const Frame = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  align-items: center;
  border: solid 1px;
  background-color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 12%;
  height: 100%;
  border: solid 1px;
  img {
    width: 100%;
    border: solid 1px;
  }
`;

const LinkStyle = {
  textDecoration: "none",
  margin: "0px",
  padding: "0px",
};

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [initialScroll, setInitialScroll] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll down
      setHidden(true);
      setInitialScroll(false);
    } else if (currentScrollY < lastScrollY) {
      // Scroll up
      setHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Container hidden={hidden}>
      <Frame>
        <Logo>
          <a href="/" style={LinkStyle}>
            <img src="/images/logo.png" />
          </a>
        </Logo>
      </Frame>
    </Container>
  );
};

export default Header;
