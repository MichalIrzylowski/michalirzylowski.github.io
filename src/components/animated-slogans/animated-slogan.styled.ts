import styled from 'styled-components';
import { animated } from 'react-spring';

import { mobile } from '@styles/breakpoints';

export const AnimatedH2 = styled(animated.h2)`
    margin: 0;
    overflow: hidden;
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 800;
    text-transform: uppercase;
    will-change: transform, opacity, height;
    white-space: nowrap;

    font-size: 5em;
    line-height: 80px;

    @media (max-width: ${mobile}) {
        font-size: 3em;
        line-height: 50px;
    }
`;
