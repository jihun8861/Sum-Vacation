import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import { HiShare } from "react-icons/hi";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    min-width: 1250px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    border: solid 1px;
    flex: 1;
    margin-top: 150px;
`;

const TopArrow = styled.div`
    position: fixed;
    border: solid 2px;
    width: 40px;
    height: 40px;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const TopArrowIcon = styled(FaArrowUp)`
    font-size: 16px;
`;

const Share = styled.div`
    position: fixed;
    border: solid 2px;
    width: 40px;
    height: 40px;
    right: 20px;
    bottom: 70px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`

const ShareIcon = styled(HiShare)`
    font-size: 16px;
`

const Layout = ({ props }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <Container>
                <Header/>
                <Main>
                    {props}
                    <Share><ShareIcon/></Share>
                    <TopArrow onClick={scrollToTop}>
                        <TopArrowIcon />
                    </TopArrow>
                </Main>
            </Container>
            <Footer/>
        </>
    );
};

export default Layout;
