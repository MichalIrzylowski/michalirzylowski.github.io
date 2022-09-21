import React from "react";
import ExternalLink from "../ExternalLink";

import SectionHeading from "../SectionHeading";
import SensitiveInfo from "../SensitiveInfo";

import * as S from "./styled";

const ContactInfo = () => (
    <>
        <SectionHeading>Contact:</SectionHeading>
        <S.InfoList>
            <S.ListItem>
                <S.TelephoneIcon size={20} />
                <SensitiveInfo>
                    <ExternalLink href="tel:+48794731291">
                        +48 794 731 291
                    </ExternalLink>
                </SensitiveInfo>
            </S.ListItem>
            <S.ListItem>
                <S.MailIcon size={20} />
                <SensitiveInfo>
                    <ExternalLink href="mailto:michal.irzylowski@gmail.com">
                        michal.irzylowski@gmail.com
                    </ExternalLink>
                </SensitiveInfo>
            </S.ListItem>
            <S.ListItem>
                <S.WorldIcon size={20} />
                <ExternalLink href="https://www.irzylow.ski">
                    www.irzylow.ski
                </ExternalLink>
            </S.ListItem>
            <S.ListItem>
                <S.LocationIcon size={20} />
                Warsaw, Poland
            </S.ListItem>
        </S.InfoList>
    </>
);

export default ContactInfo;
