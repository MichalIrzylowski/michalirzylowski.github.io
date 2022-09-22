import React, { FC } from "react";

import * as S from "./styled";
import { ProgressProps } from "./types";

const Progress: FC<ProgressProps> = ({ max = 100, value, label, scale }) => (
    <>
        <S.Label htmlFor={label}>{label}</S.Label>
        {scale && (
            <S.Scale>
                {scale.map((scaleElement) => (
                    <S.ScaleElement key={scaleElement}>
                        {scaleElement}
                    </S.ScaleElement>
                ))}
            </S.Scale>
        )}
        <S.Progress id={label} max={max} value={value} />
    </>
);

export default Progress;
