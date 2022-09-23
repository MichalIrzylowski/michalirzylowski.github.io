import React, { useRef } from "react";
import { HeadFC, useStaticQuery, graphql } from "gatsby";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import GlobalStyles from "../styles/global";

import Top from "../components/Top";
import Body from "../components/Body";

import * as S from "./styles";

const IndexPage = () => {
    const ref = useRef<HTMLElement | null>(null);

    const handleDownloadCv = async () => {
        const element = ref.current;
        const canvas = await html2canvas(element as HTMLElement);
        const data = canvas.toDataURL("image/png");

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("michal-irzylowski-cv.pdf");
    };

    return (
        <>
            <S.DownlaodCvButtonWrapper>
                <S.DownlaodCvButton onClick={handleDownloadCv}>
                    Download CV!
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
