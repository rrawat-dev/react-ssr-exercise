import React from 'react';
import {renderToString} from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'; 

import * as REACT_PAGES from '../../../tmp/reactPagesServerModule';

export default function(options) {
    //const manifest = require('../../dist/client/manifest.json');
    return function (req, res, next) {
        const pages = Object.keys(REACT_PAGES);
        const basepath = req.path === '/' ? 'index' : req.path.split('/')[1];
        const page = REACT_PAGES[basepath] ? basepath : 'error';

        console.log('>>>> pages ', pages);
        console.log('>>>> req.path ', basepath);
        console.log('>>>> page ', page);
        
        const App = REACT_PAGES[page];
        const sheet = new ServerStyleSheet(); 
        const html = renderToString(sheet.collectStyles(<App />));
        const styles = sheet.getStyleTags();

        res.react = {
            page,
            styles,
            html
        };

        next();
    };
};