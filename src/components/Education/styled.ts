import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Years = styled.p`
    color: ${colors.blue};
    margin-bottom: 5px;
`;

export const Grade = styled.h4`
    letter-spacing: 1px;
    margin-bottom: 5px;
`;

export const University = styled.h5`
    letter-spacing: 1px;
    color: ${colors.grey};

    :not(:last-of-type) {
        margin-bottom: 10px;
    }
`;
