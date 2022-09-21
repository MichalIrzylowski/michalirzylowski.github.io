import React from "react";

import myPicture from "../../assets/images/IMG_3790.jpeg";

import * as S from "./styled";

const Top = () => (
    <S.Header>
        <S.MyPicture src={myPicture} />
        <S.Headings>
            <S.Name>Michal Irzylowski</S.Name>
            <S.Role>Front-end Developer</S.Role>
        </S.Headings>
    </S.Header>
);

export default Top;
