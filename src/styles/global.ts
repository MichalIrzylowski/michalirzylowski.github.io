import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Outfit", sans-serif;

    }

    body {
        padding: 30px 90px;
        background-color: #f9f9f9;
    }
`;

export default GlobalStyles;
