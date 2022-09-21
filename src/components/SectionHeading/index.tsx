import React, { FC } from "react";

import * as S from "./styled";

import { SectionHeadingProps } from "./types";

const SectionHeading: FC<SectionHeadingProps> = ({ children, borderColor }) => (
    <S.SectionHeading borderColor={borderColor}>{children}</S.SectionHeading>
);

export default SectionHeading;
