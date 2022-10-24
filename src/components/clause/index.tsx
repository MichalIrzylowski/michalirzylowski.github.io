import React from "react";
import { useCompanyName } from "../../providers/CompanyName";
import SectionHeading from "../SectionHeading";

import * as S from "./clause.styled";

const Clause = () => {
    const companyName = useCompanyName();

    return (
        <S.Clause>
            <SectionHeading>Clause:</SectionHeading>
            <p>
                I hereby give consent for my personal data to be processed by{" "}
                {companyName} for the purpose of conducting recruitment for the
                position for which I am applying.
            </p>
        </S.Clause>
    );
};

export default Clause;
