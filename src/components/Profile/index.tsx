import React from "react";
import SectionHeading from "../SectionHeading";

import * as S from "./styled";

const Profile = () => (
    <>
        <SectionHeading>Profile:</SectionHeading>
        <S.ProfileText>
            Hi! My name is <strong>Michal</strong> and I am a{" "}
            <strong>Front-end Developer</strong> with{" "}
            {Math.floor(
                (Date.now() - new Date("2019-09-07").getTime()) /
                    1000 /
                    60 /
                    60 /
                    24 /
                    365,
            )}{" "}
            years of experience. I specialise in React.js applications. I like
            what I do, I always try to find better solution for my work.
        </S.ProfileText>
    </>
);

export default Profile;
