import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import Heading from "./Heading";
import Filter from "./Filter";
import Grid from "./Grid";

const Flex = styled.div`
    & > div {
        display: flex;
        gap: 90px;
    }
`;

export default function Products() {
    return (
        <>
            <Heading />
            <Flex>
                <Container>
                    <Filter />
                    <Grid />
                </Container>
            </Flex>
        </>
    );
}
