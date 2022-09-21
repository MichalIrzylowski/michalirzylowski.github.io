import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "picture details";
    grid-gap: 60px;
    padding-bottom: 20px;
`;

export const MyPicture = styled.img`
    grid-area: picture;
    width: 100%;
    border-radius: 50%;
`;

export const Headings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Name = styled.h1`
    font-size: 72px;
    letter-spacing: 2px;
`;

export const Role = styled.h2`
    font-size: 48px;
    font-weight: 200;
    letter-spacing: 2px;
    color: #131313;
`;
