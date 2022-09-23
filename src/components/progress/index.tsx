import React, { FC } from "react";

import * as S from "./styled";
import { ProgressProps } from "./types";

const Progress: FC<ProgressProps> = ({ max = 100, value, label, scale }) => (
    <S.Wrapper>
        <S.Label>{label}</S.Label>
        {scale && (
            <S.Scale>
                {scale.map((scaleElement) => (
                    <S.ScaleElement key={scaleElement}>
                        {scaleElement}
                    </S.ScaleElement>
                ))}
            </S.Scale>
        )}
        <S.ProgressWrapper>
            <S.ProgressValue style={{ width: `${(value / max) * 100}%` }} />
        </S.ProgressWrapper>
    </S.Wrapper>
);

export default Progress;
