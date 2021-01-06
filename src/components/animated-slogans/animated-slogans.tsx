import React, { useRef, useState, useCallback, useEffect } from 'react';

import { useTransition, animated } from 'react-spring';

import * as c from '@styles/colors';

import css from './animated-slogans.module.scss';

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
            { opacity: 1, height: 80 },
            {
                transform: 'perspective(600px) rotateX(180deg)',
                color: c.green,
            },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: c.red }, { opacity: 0, height: 0 }],
        update: { color: c.blue },
    });

    const reset = useCallback(() => {
        ref.current.map(clearTimeout);
        ref.current = [];
        setItems([]);
        ref.current.push(
            setTimeout(() => setItems(['Apples', 'Oranges', 'Kiwis']), 2000)
        );
        ref.current.push(setTimeout(() => setItems(['Apples', 'Kiwis']), 5000));
        ref.current.push(
            setTimeout(() => setItems(['Apples', 'Bananas', 'Kiwis']), 8000)
        );
    }, []);

    useEffect(() => void reset(), []);

    return (
        <div>
            {transitions.map(
                ({ item, props: { /*innerHeight,*/ ...rest }, key }) => (
                    <animated.div
                        className={css['transitions-item']}
                        key={key}
                        style={rest}
                        onClick={reset}
                    >
                        <animated.div
                            style={{
                                overflow: 'hidden' /*height: innerHeight*/,
                            }}
                        >
                            {item}
                        </animated.div>
                    </animated.div>
                )
            )}
        </div>
    );
};
