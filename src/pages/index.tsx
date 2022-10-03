import React, { useRef } from "react";
import { HeadFC, useStaticQuery, graphql } from "gatsby";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import GlobalStyles from "../styles/global";

import Top from "../components/Top";
import Body from "../components/Body";

import * as S from "../page-styles/index/styles";

const IndexPage = () => {
    const ref = useRef<HTMLElement | null>(null);

    return (
        <>
            <S.DownlaodCvButtonWrapper>
                <S.DownlaodCvButton onClick={window.print}>
                    Get CV!
                </S.DownlaodCvButton>
            </S.DownlaodCvButtonWrapper>
            <S.Paper ref={ref}>
                <Top />
                <Body />
            </S.Paper>
        </>
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
