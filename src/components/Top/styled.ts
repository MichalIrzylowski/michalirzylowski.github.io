import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column-reverse;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 3fr 7fr;
        grid-template-areas: "picture details";
        grid-gap: 60px;
        padding-bottom: 20px;
    }

    @media print {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: "picture details";
        grid-gap: 60px;
        padding-bottom: 20px;
    }
`;

export const MyPicture = styled.img`
    grid-area: picture;
    border-radius: 50%;
    width: 100%;

    @media screen and (max-width: 1024px) {
        max-width: 500px;
        margin: 30px auto 0;
    }
`;

export const Headings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Name = styled.h1`
    font-size: 48px;
    letter-spacing: 2px;

    @media screen and (min-width: 1024px) {
        font-size: 72px;
    }

    @media print {
        font-size: px;
    }
`;

export const Role = styled.h2`
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 2px;
    color: #131313;

    @media screen and (min-width: 1024px) {
        font-size: 48px;
    }

    @media print {
        font-size: 22px;
    }
`;
