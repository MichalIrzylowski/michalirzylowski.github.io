import React, { useRef, useState, useCallback, useEffect } from 'react';

import { useTransition, animated } from 'react-spring';

import * as S from './animated-slogan.styled';

import * as c from '@styles/colors';

export const AnimatedSlogans: React.FC = () => {
    const ref = useRef<NodeJS.Timeout[]>([]);
    const [items, setItems] = useState<string[]>([]);
    const transitions = useTransition(items, null, {
        from: {
            opacity: 0,
            height: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: c.grey,
        },
        enter: [
            { opacity: 1, height: 50 },
            {
                transform: 'perspective(600px) rotateX(180deg)',
                color: c.green,
            },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: c.red }, { opacity: 0, height: 0 }],
        update: {
            color: c.blue,
            transform: 'perspective(600px) rotateX(0deg)',
        },
    });

    const reset = useCallback(() => {
        ref.current.map(clearTimeout);
        ref.current = [];
        setItems([]);
        ref.current.push(
            setTimeout(() => setItems(['front-end', 'back-end']), 2000)
        );
        ref.current.push(
            setTimeout(
                () =>
                    setItems([
                        'front-end',
                        'html',
                        'css',
                        'js',
                        'ts',
                        'react.js',
                        'back-end',
                        'node.js',
                        'express.js',
                    ]),
                5000
            )
        );
    }, []);

    useEffect(() => {
        reset();
    }, []);

    return (
        <div>
            {transitions.map(({ item, props: style, key }) => (
                <S.AnimatedH2 key={key} style={style} onClick={reset}>
                    <animated.div style={{ overflow: 'hidden' }}>
                        {item}
                    </animated.div>
                </S.AnimatedH2>
            ))}
        </div>
    );
};
