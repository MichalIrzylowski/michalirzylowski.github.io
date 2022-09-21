import React from "react";

import SectionHeading from "../SectionHeading";

import * as S from "./styled";

const Interests = () => (
    <>
        <SectionHeading>Interests:</SectionHeading>
        <S.InterestsWrapper>
            <S.InterestWrapper>
                <S.ImageBackground>
                    <S.GearIcon size={20} />
                </S.ImageBackground>
                Technology
            </S.InterestWrapper>
            <S.InterestWrapper>
                <S.ImageBackground>
                    <S.AtomIcon size={20} />
                </S.ImageBackground>
                Chemistry
            </S.InterestWrapper>
            <S.InterestWrapper>
                <S.ImageBackground>
                    <S.GameIcon size={20} />
                </S.ImageBackground>
                Gaming
            </S.InterestWrapper>
            <S.InterestWrapper>
                <S.ImageBackground>
                    <S.WebIcon size={20} />
                </S.ImageBackground>
                Web
            </S.InterestWrapper>
        </S.InterestsWrapper>
    </>
);

export default Interests;
