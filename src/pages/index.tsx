import React, { useEffect } from "react";

import Top from "../components/Top";
import Body from "../components/Body";

import * as S from "../page-styles/index/styles";
import { useCompanyName, useSetCompanyName } from "../providers/CompanyName";

const IndexPage = () => {
    const setCompanyName = useSetCompanyName();
    const companyName = useCompanyName();

    const handlePreparePageForPrint = () => {
        const companyName = window.prompt("What is your company name?");

        if (companyName) {
            setCompanyName(companyName);
        }
    };

    useEffect(() => {
        if (companyName && window) {
            window.print();
        }
    }, [companyName]);

    return (
        <S.Paper>
            <S.DownlaodCvButtonWrapper>
                <S.DownlaodCvButton onClick={handlePreparePageForPrint}>
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
