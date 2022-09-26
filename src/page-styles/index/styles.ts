import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Paper = styled.main`
    background-color: #ffffff;
    box-shadow: 0 50px 75px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 30px;

    @media screen and (min-width: 1024px) {
        padding: 60px;
        max-width: 1172px;
        margin: 0 auto;
    }
`;

export const DownlaodCvButtonWrapper = styled.div`
    @media screen and (max-width: 1024px) {
        display: none;
    }

    position: absolute;
    top: 70px;
    right: 150px;
`;

export const DownlaodCvButton = styled.button`
    background: transparent;
    border: 1px solid ${colors.blue};
    color: ${colors.blue};
    cursor: pointer;
    font-size: 22px;
    padding: 10px 20px;
    border-radius: 10px;
`;
