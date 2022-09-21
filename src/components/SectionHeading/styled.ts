import styled from "styled-components";
import { colors } from "../../styles/colors";
import { SectionHeadingStyles } from "./types";

export const SectionHeading = styled.h3<SectionHeadingStyles>`
    border-left: 3px solid
        ${({ borderColor = "orange" }) => colors[borderColor]};
    padding-left: 30px;
    font-size: 22px;
    letter-spacing: 2px;
    margin: 30px 0 20px;
`;
