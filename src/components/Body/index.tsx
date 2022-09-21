import React from "react";

import ContactInfo from "../ContactInfo";
import Education from "../Education";
import Experience from "../Experience";
import Interests from "../Interests";
import Languages from "../Languages";
import Profile from "../Profile";
import TechStack from "../TechStack";

import * as S from "./styled";

const Body = () => (
    <S.Body>
        <S.Simple>
            <ContactInfo />
            <Education />
            <Languages />
            <Interests />
        </S.Simple>
        <S.Elabrated>
            <Profile />
            <Experience />
            <TechStack />
        </S.Elabrated>
    </S.Body>
);

export default Body;
