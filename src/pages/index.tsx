import React from "react";

import Top from "../components/Top";
import Body from "../components/Body";

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

export { default as Head } from "../components/Head";
