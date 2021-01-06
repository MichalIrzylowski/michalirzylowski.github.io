import React from 'react';
import { hydrate } from 'react-dom';

import Typography from 'typography';
import theme from 'typography-theme-fairy-gates';

import { App } from './app';

import './styles/global.scss';

hydrate(<App />, document.getElementById('app'));

const typography = new Typography(theme);
typography.injectStyles();

if (module.hot) {
    module.hot.accept();
    console.log('HMR enabled');
}
