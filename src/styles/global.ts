import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Outfit", sans-serif;

    }

    body {
        background-color: #f9f9f9;
        padding: 10px;

        @media screen and (min-width: 1024px) {
            padding: 30px 90px;
        }

        @media print {
            padding: 0;
            print-color-adjust: exact;
        }
    }
`;

export default GlobalStyles;
