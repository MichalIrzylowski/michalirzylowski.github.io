import React from 'react';
import styled from 'styled-components';

import { Heading, HeadingProps } from '../heading';

const StyledHeadline = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface Props extends HeadingProps {
    children: string[];
}

export const Headline: React.FC<Props> = ({ children, ...headingProps }) => (
    <StyledHeadline>
        {children.map((heading, i) => (
            <Heading {...headingProps} key={i}>
                {heading.toUpperCase()}
            </Heading>
        ))}
    </StyledHeadline>
);
