import styled from "styled-components";

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

export const GearIcon = styled(Gear)`
    color: ${colors.white};
`;

export const AtomIcon = styled(Atom)`
    color: ${colors.white};
`;

export const GameIcon = styled(Game)`
    color: ${colors.white};
`;

export const WebIcon = styled(Web)`
    color: ${colors.white};
`;
