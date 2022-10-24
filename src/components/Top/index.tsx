import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as S from "./styled";

const Top = () => (
    <S.Header>
        <StaticImage
            src="../../assets/images/IMG_3790.jpeg"
            alt="Michal Irzylowski on Warsaw backchound"
            imgClassName="hero-img"
            placeholder="none"
        />
        <S.Headings>
            <S.Name>Michal Irzylowski</S.Name>
            <S.Role>Front-end Engeneer</S.Role>
        </S.Headings>
    </S.Header>
);

export default Top;
