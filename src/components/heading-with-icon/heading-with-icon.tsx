import React, { useMemo } from 'react';
import styled from 'styled-components';
import { StyledIcon } from 'styled-icons/types';
import { Heading, HeadingProps } from '@components/heading';

import * as c from '@styles/colors';

type iconColor = keyof typeof c;

interface Styles {
    iconOnFront?: boolean;
}
const Wrapper = styled.div<Styles>`
    display: flex;
    flex-direction: ${({ iconOnFront }) =>
        iconOnFront ? 'row-reverse' : 'row'};
`;

interface IconCreation {
    icon: StyledIcon;
    color?: iconColor;
}

export interface HeadingWithIconProps extends HeadingProps, Styles {
    icon: StyledIcon;
    iconColor?: iconColor;
}

export const HeadingWithIcon: React.FC<HeadingWithIconProps> = ({
    icon,
    iconOnFront,
    children,
    iconColor,
    ...headingProps
}) => {
    const CreateIcon = useMemo(
        () => styled(icon)`
            height: 20px;
            color: ${c[iconColor || 'grey']};
            margin: 2.175rem 20px 0;
        `,
        [icon, iconColor]
    );

    return (
        <Wrapper iconOnFront={iconOnFront}>
            <Heading {...headingProps}>{children}</Heading>
            {icon && <CreateIcon />}
        </Wrapper>
    );
};
