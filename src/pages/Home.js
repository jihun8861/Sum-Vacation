import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const Container = styled.div`
    width: 1250px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const HomeContent = () => {
    return(
        <>
        <Container>
            <Banner/>
            <Banner/>
            <Banner/>
        </Container>
        </>
    )
}

const Home = () => {
    return <Layout props={<HomeContent/>}/>
}

export default Home;