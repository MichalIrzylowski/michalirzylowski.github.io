import React, { FC } from "react";
import { MDXProvider } from "@mdx-js/react";

import { TimelineItemProps } from "./types";

import * as S from "./styled";

const TimelineItem: FC<TimelineItemProps> = ({
    period,
    companyName,
    position,
    description,
}) => (
    <S.TimelineItemWrapper>
        <S.Wrapper>
            <S.Period>{period}</S.Period>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.Role>{position}</S.Role>
            <p>{description}</p>
        </S.Wrapper>
    </S.TimelineItemWrapper>
);

export default TimelineItem;
