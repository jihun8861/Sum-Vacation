import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiUserLine } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { IoPowerSharp } from "react-icons/io5";
import { FaRegFaceSmile } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; 

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
  width: 95%;
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

const Modal = styled.div`
  position: absolute;
  top: 50px;
  right: 1px;
  width: 300px;
  height: 150px;
  background-color: white;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(100, 100, 100, 0.5);
  z-index: 100;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ModalItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  padding: 10px;
`;

const ModalIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Header = ({ isHome }) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(isHome);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setAtTop(false);
    }
  }, [isHome, lastScrollY]);

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

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setIsModalOpen(!isModalOpen);
    } else {
      navigate("/signin");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate("/");
  };

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
          <h4>챗봇상담</h4>
        </Section2>

        <Section2 atTop={atTop}>
          <SearchIcon atTop={atTop} />
        </Section2>

        <Section2 atTop={atTop}>
          <div onClick={handleUserIconClick} style={{ cursor: 'pointer', position: 'relative' }}>
            <UserIcon atTop={atTop} />
            {isModalOpen && (
              <Modal>
                <ModalItem onClick={() => navigate("/mypage")}>
                  <ModalIcon>
                    <FaRegFaceSmile />
                  </ModalIcon>
                  <p>나의정보</p>
                </ModalItem>
                <ModalItem onClick={handleLogout}>
                  <ModalIcon>
                    <IoPowerSharp />
                  </ModalIcon>
                  <p>로그아웃</p>
                </ModalItem>
              </Modal>
            )}
          </div>
        </Section2>

        <Section2 atTop={atTop}>
          <BasketIcon atTop={atTop} />
        </Section2>
      </Frame>
    </Container>
  );
};

export default Header;
