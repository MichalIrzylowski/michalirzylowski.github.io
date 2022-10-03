import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wrapper = styled.section`
    :not(:last-of-type) {
        margin-bottom: 10px;
    }
`;

export const Scale = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
`;

export const ScaleElement = styled.span`
    font-size: 12px;
`;

export const Label = styled.span`
    display: inline-block;
    :not(:first-of-type) {
        margin-top: 15px;
    }
`;

export const ProgressWrapper = styled.div`
    background-color: ${colors.lightGrey};
    border-radius: 5px;
    overflow: hidden;
    height: 10px;

    @media print {
        border: 1px solid ${colors.grey};
    }
`;

export const ProgressValue = styled.div`
    background-color: ${colors.blue};
    border-radius: 5px;
    height: 100%;

    @media print {
        border: 4px solid ${colors.blue};
    }
`;
