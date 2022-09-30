import React, { FC } from "react";

import { useToggle } from "../../hooks/useToggle";

import { useShowSensitiveData } from "../../providers/ShowSensitiveData";

import { SensitiveInfoProps } from "./types";
import * as S from "./styled";

const SensitiveInfo: FC<SensitiveInfoProps> = ({ children }) => {
    const [visible, toggleVisible] = useToggle(useShowSensitiveData());

    if (visible) {
        return <>{children}</>;
    }

    return <S.Reveal onClick={toggleVisible}>Click to see</S.Reveal>;
};

export default SensitiveInfo;
