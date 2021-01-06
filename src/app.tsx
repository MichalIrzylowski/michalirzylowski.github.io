import React from 'react';

import { ChartLine } from '@styled-icons/fa-solid/ChartLine';
import { Cogs } from '@styled-icons/icomoon/Cogs';

import { PageWrapper } from '@components/page-wrapper';
import { Heading } from '@components/heading';
import { Headline } from '@components/headline';
import { Text } from '@components/text';
import { HeadingWithIcon } from '@components/heading-with-icon';

export const App = () => (
    <main>
        <PageWrapper>
            <Heading level="1" large>
                Michał Irzyłowski
            </Heading>
            <Headline level="6" color="black">
                {['front-end', 'back-end', 'web apps']}
            </Headline>
            <article>
                <Heading color="blue">kim jestem?</Heading>
                <Text>
                    Mam na imię Michał, jestem doświadczonym deweloperem
                    webowym. Korzystam z najnowszych technologii.
                </Text>
            </article>
            <article>
                <Heading color="blue">dlaczego ja?</Heading>
                <HeadingWithIcon
                    color="black"
                    iconColor="black"
                    icon={Cogs}
                    level="6"
                >
                    Nowoczesne rozwiązania
                </HeadingWithIcon>
                <HeadingWithIcon
                    color="black"
                    iconColor="black"
                    icon={ChartLine}
                    level="6"
                >
                    Skalowalne projekty
                </HeadingWithIcon>
            </article>
            <article>
                <Heading color="blue">czym działam?</Heading>
                <ul>
                    <li>
                        Front-end
                        <ul>
                            <li>html</li>
                            <li>css</li>
                            <li>js</li>
                            <li>ts</li>
                            <li>react.js</li>
                            <li>redux</li>
                        </ul>
                    </li>
                    <li>
                        Back-end
                        <ul>
                            <li>node.js</li>
                            <li>mongodb</li>
                        </ul>
                    </li>
                </ul>
            </article>
        </PageWrapper>
    </main>
);
