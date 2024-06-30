import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 150px;
    border: solid 1px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    transition: top 0.5s ease-in-out;
    ${props => props.hidden && css`
        top: -150px;
    `}
    background-image: url("/images/test.png");
    background-size: 100% 100%;
`

const Frame = styled.div`
    width: 1800px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

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
                
            </Frame>
        </Container>
    );
}

export default Header;
