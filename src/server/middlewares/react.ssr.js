import React from 'react';
import {renderToString} from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'; 

import * as REACT_PAGES from '../../../tmp/reactPagesServerModule';

export default function(options) {
    //const manifest = require('../../dist/client/manifest.json');
    return async function (req, res, next) {
        const pages = Object.keys(REACT_PAGES);
        const basepath = req.path === '/' ? 'index' : req.path.split('/')[1];
        const page = REACT_PAGES[basepath] ? basepath : 'error';
        
        const sheet = new ServerStyleSheet();
        const App = REACT_PAGES[page];
        
        const props = await (App.getServerSideProps ? App.getServerSideProps() : Promise.resolve({}));
        console.log('props: ', props);
        const html = renderToString(sheet.collectStyles(<App {...props} />));
        const styles = sheet.getStyleTags();

        res.react = {
            page,
            styles,
            html
        };

        next();
    };
};