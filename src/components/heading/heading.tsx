import React from 'react';
import styled, { css } from 'styled-components';

import * as c from '@styles/colors';
import * as bp from '@styles/breakpoints';

type level = '1' | '2' | '3' | '4' | '5' | '6';
type color = keyof typeof c;

export interface HeadingProps {
    level?: level;
    color?: color;
    huge?: boolean;
    large?: boolean;
}

const HeadingComponent: React.FC<HeadingProps> = ({
    level,
    children,
    ...restProps
}) => React.createElement(`h${level}`, restProps, children);

HeadingComponent.defaultProps = {
    level: '2',
};

const hugeStyles = css`
    font-size: 5em;
    font-weight: 800;
`;

const largeStyles = css`
    font-size: 3.9em;

    @media (max-width: ${bp.smallMobile}) {
        font-size: 3em;
    }
`;

export const Heading = styled(HeadingComponent)`
    color: ${({ color = 'grey' }) => c[color]};

    ${({ huge }) => huge && hugeStyles}
    ${({ large }) => large && largeStyles}
`;
