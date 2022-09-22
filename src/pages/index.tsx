import React from "react";
import { HeadFC, useStaticQuery, StaticQuery, graphql } from "gatsby";

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

export const Head: HeadFC = () => {
    const title = useStaticQuery<Queries.HeadQuery>(query);

    return (
        <>
            <title>{title.site?.siteMetadata?.title}</title>
            <GlobalStyles />
        </>
    );
};

export const query = graphql`
    query Head {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
