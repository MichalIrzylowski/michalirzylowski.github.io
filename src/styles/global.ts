import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Outfit";
        font-weight: 100 900;
        font-display: swap;
        src: url(/fonts/Lato-Regular.ttf) format("truetype");
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Outfit-regular", sans-serif;

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
