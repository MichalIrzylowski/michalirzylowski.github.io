import styled, { css } from "styled-components";

export const Body = styled.article`
    display: grid;
    grid-template-columns: 3fr 7fr;
    grid-template-rows: auto;
    grid-template-areas: "simple elaborated";
    grid-gap: 60px;
    margin-top: 30px;
`;

const bottomDistance = css`
    :not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

export const Simple = styled.section`
    grid-area: simple;

    ${bottomDistance}
`;

export const Elabrated = styled.section`
    grid-area: elaborated;

    ${bottomDistance}
`;
