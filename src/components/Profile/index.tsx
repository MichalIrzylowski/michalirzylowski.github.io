import React from "react";
import SectionHeading from "../SectionHeading";

import * as S from "./styled";

const Profile = () => (
    <>
        <SectionHeading>Profile:</SectionHeading>
        <S.ProfileText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus
            ex, aliquam ut justo nec, vestibulum venenatis tortor. Integer at
            tellus risus. Fusce ex magna, tincidunt vel commodo id, porta
            facilisis nulla. Vestibulum lorem ante, posuere quis magna a,
            scelerisque interdum dui. Nullam id blandit lorem.
        </S.ProfileText>
        <S.ProfileText>
            Sed ac mauris id ipsum congue laoreet. Morbi vestibulum imperdiet
            augue sed elementum. Curabitur venenatis ante ac quam scelerisque,
            nec molestie libero maximus. Integer blandit ut nulla at venenatis.
            Nam at ex ut mauris laoreet ultricies. Phasellus velit lacus,
            vehicula quis porta at, aliquam at magna. Praesent eleifend est
            augue.
        </S.ProfileText>
    </>
);

export default Profile;
