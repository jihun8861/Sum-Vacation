import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 31%;
    height: 440px;
    border: solid 1px;
`

const ImageFrame1 = styled.div`
    width: 100%;
    height: 70%;
    border: solid 1px;
`

const TextFrame1 = styled.div`
    width: 100%;
    height: 30%;
    border: solid 1px;
`
const ItemFrame1 = () => {
    return (
        <>
        <Container>
            <ImageFrame1/>
            <TextFrame1/>
        </Container>

        </>
    )
}

export default ItemFrame1;