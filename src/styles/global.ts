import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Outfit-regular";
        font-display: swap;
        src: url(/fonts/Lato-Regular.ttf) format("truetype");
    }

    @font-face {
        font-family: "Outfit-bold";
        font-display: swap;
        src: url(/fonts/Lato-Bold.ttf) format("truetype");
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Outfit-regular", sans-serif;

    }

    strong {
        font-family: 'Outfit-bold', sans-serif;
    }

    body {
        background-color: #f9f9f9;
        padding: 10px;

        @media screen and (min-width: 1024px) {
            padding: 30px 90px;
        }

        @media print {
            padding: 0;
        }
    }

    .hero-img {
        display: inline-block;
        grid-area: picture;
        border-radius: 50%;
        width: 100%;

        @media screen and (max-width: 1024px) {
            max-width: 500px;
            margin: 30px auto 0;
        }

        @media print {
            print-color-adjust: exact;
            }
        }
`;

export default GlobalStyles;
