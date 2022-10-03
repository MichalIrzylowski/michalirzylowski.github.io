import styled, { css } from "styled-components";

import { Telephone } from "@styled-icons/bootstrap/Telephone";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { World } from "@styled-icons/boxicons-regular/World";
import { LocationPin } from "@styled-icons/entypo/LocationPin";

import { colors } from "../../styles/colors";

export const InfoList = styled.ul`
    list-style-type: none;
`;

export const ListItem = styled.li`
    :not(:last-of-type) {
        margin-bottom: 10px;
    }
`;

const iconStyles = css`
    color: ${colors.blue};
    margin-right: 20px;

    @media print {
        margin-right: 10px;
    }
`;

export const TelephoneIcon = styled(Telephone)`
    ${iconStyles}
`;

export const MailIcon = styled(EmailOutline)`
    ${iconStyles}
`;

export const WorldIcon = styled(World)`
    ${iconStyles}
`;

export const LocationIcon = styled(LocationPin)`
    ${iconStyles}
`;
