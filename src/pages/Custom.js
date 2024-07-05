import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
    width: 1300px;
    height: 500px;
    border: solid 1px;
`

const CustomContent = () => {
    return (
        <Container>
            커스텀 페이지입니다.
        </Container>
    )
}

const Custom = () => {
    return <Layout isHome={false} children={<CustomContent />} />;
}

export default Custom;