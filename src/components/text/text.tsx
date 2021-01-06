import React from 'react';
import styled from 'styled-components';

import * as c from '@styles/colors';

type textType = 'p' | 'span';
type colors = keyof typeof c;

export interface TextProps {
    type?: textType;
    color?: colors;
}

const TextComponent: React.FC<TextProps> = ({
    type = 'p',
    children,
    ...restProps
}) => React.createElement(type, restProps, children);

export const Text = styled(TextComponent)`
    color: ${({ color = 'black' }) => c[color]};
`;
