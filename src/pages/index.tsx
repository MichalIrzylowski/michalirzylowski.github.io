import React from "react";
import type { HeadFC } from "gatsby";

import GlobalStyles from "../styles/global";

import Top from "../components/Top";
import Body from "../components/Body";

import * as S from "./styles";

const IndexPage = () => {
    return (
        <S.Paper>
            <Top />
            <Body />
        </S.Paper>
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <>
        <title>Michal Irzylowski</title>
        <GlobalStyles />
    </>
);
