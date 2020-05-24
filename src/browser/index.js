import React from 'react';
import {hydrate} from 'react-dom';

import * as REACT_PAGES from '../../tmp/reactPagesClientModule';

if (__REACT_SSR_PAGE__) {
    (REACT_PAGES[__REACT_SSR_PAGE__]).then((module) => {
        const Component = module.default;
        hydrate(<Component />, document.getElementById('root'));
    });
}