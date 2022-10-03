import styled, { css } from "styled-components";

import { Gear } from "@styled-icons/bootstrap/Gear";
import { Atom } from "@styled-icons/boxicons-regular/Atom";
import { Game } from "@styled-icons/boxicons-solid/Game";
import { Web } from "@styled-icons/material/Web";

import { colors } from "../../styles/colors";

export const InterestsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
`;

export const InterestWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ImageBackground = styled.div`
    background-color: ${colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;
`;

const iconStyles = css`
    color: ${colors.white};

    @media print {
        color: ${colors.blue};
        print-color-adjust: exact;
    }
`;

export const GearIcon = styled(Gear)`
    ${iconStyles}
`;

export const AtomIcon = styled(Atom)`
    ${iconStyles}
`;

export const GameIcon = styled(Game)`
    ${iconStyles}
`;

export const WebIcon = styled(Web)`
    ${iconStyles}
`;
