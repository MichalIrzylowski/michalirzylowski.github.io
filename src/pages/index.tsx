import React from "react";

import Top from "../components/Top";
import Body from "../components/Body";
import HeadCore from "../components/Head";

import * as S from "../page-styles/index/styles";

const IndexPage = () => {
    const handlePrint = () => {
        if (window) {
            window.print();
        }
    };

    return (
        <S.Paper>
            <S.DownlaodCvButtonWrapper>
                <S.DownlaodCvButton onClick={handlePrint}>
                    Get CV!
                </S.DownlaodCvButton>
            </S.DownlaodCvButtonWrapper>
            <Top />
            <Body />
        </S.Paper>
    );
};

export default IndexPage;

const mainImgStyles =
    "{display: inline-block; grid-area: picture; border-radius: 50%; width: 100%; @media screen and (max-width: 1024px) {max-width: 500px; margin: 30px auto 0;} @media print { print-color-adjust: exact; }";

export const Head = () => (
    <HeadCore>
        <style>.hero-img {mainImgStyles}</style>
    </HeadCore>
);
