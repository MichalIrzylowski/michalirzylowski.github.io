import styled from "styled-components";
import { colors } from "../styles/colors";

export const Paper = styled.main`
    background-color: #ffffff;
    padding: 60px;
    box-shadow: 0 50px 75px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
`;

export const DownlaodCvButtonWrapper = styled.div`
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
