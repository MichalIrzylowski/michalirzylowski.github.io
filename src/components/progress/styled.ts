import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Progress = styled.progress`
    &[value] {
        width: 100%;
        height: 10px;
        appearance: none;
    }

    &[value]::-webkit-progress-bar {
        background-color: ${colors.lightGrey};
        border-radius: 5px;
    }

    &[value]::-webkit-progress-value {
        background-color: ${colors.blue};
        border-radius: 5px;
    }
`;

export const Scale = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: -9px;
    margin-top: 10px;
`;

export const ScaleElement = styled.span`
    font-size: 12px;
`;

export const Label = styled.label`
    display: inline-block;
    :not(:first-of-type) {
        margin-top: 15px;
    }
`;
