import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

const border = `3px solid ${colors.orange}`;

const dotSize = "14px";
export const Period = styled.h6`
    color: ${colors.blue};
    position: relative;

    ::before {
        content: "";
        position: absolute;
        width: ${dotSize};
        height: ${dotSize};
        background-color: ${colors.white};
        border: 3px solid ${colors.orange};
        border-radius: 50%;
    }
`;

export const CompanyName = styled.h4`
    margin: 10px 0 5px;
`;

export const Role = styled.h5`
    margin-bottom: 5px;
    color: ${colors.grey};
`;

export const Wrapper = styled.div`
    @media screen and (min-width: 1024px) {
        max-width: 50%;
    }
`;

const line = css`
    content: "";
    display: inline-block;
    position: absolute;
    width: 50%;
    z-index: -1;
`;

const oddDotPosition = css`
    & ${Period} {
        ::before {
            left: -28.5px;
            top: -2px;
        }
    }
`;

const evenDotPosition = css`
    & ${Period} {
        ::before {
            right: -28.5px;
            top: -2px;
        }
    }
`;

export const TimelineItemWrapper = styled.div`
    position: relative;
    z-index: 1;
    padding: 16px 20px;
    display: flex;

    :first-of-type {
        ${oddDotPosition}

        ::after {
            ${line}
            top: 3px;
            left: 0;
            height: calc(100% - 6px);
            border-left: ${border};
            border-bottom: ${border};
            border-bottom-left-radius: 15px;
        }
    }

    :not(:first-of-type):nth-of-type(odd) {
        ${oddDotPosition}

        ::after {
            ${line}
            top: -3px;
            left: 0;
            height: calc(100% - 3px);
            border-left: ${border};
            border-bottom: ${border};
            border-top: ${border};
            border-bottom-left-radius: 15px;
            border-top-left-radius: 15px;
        }
    }

    :nth-of-type(even) {
        justify-content: flex-end;

        ${evenDotPosition}

        ::after {
            ${line}
            top: -3px;
            right: 0;
            height: calc(100% - 3px);
            border-right: ${border};
            border-bottom: ${border};
            border-top: ${border};
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;
        }
    }

    :nth-of-type(odd):last-of-type {
        ::after {
            border-bottom: none;
            border-bottom-left-radius: 0;
        }
    }
`;
