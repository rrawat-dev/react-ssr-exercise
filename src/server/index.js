import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'; 

//import App from './../../pages/index';
import * as REACT_PAGES from '../../tmp/reactPagesServerModule';

const app = express();
app.use(express.static('public'));
//app.use(ssrMiddleware());

app.get('*', (req, res) => {
    const App = REACT_PAGES['index'];
    const sheet = new ServerStyleSheet(); 
    const renderedApp = renderToString(sheet.collectStyles(<App />));
    const styles = sheet.getStyleTags();

    res.send(
        `<!DOCTYPE html>
        <html>
            <head>
            ${styles}
            <script>window.__REACT_SSR_PAGE__ = "index";</script>
            </head>
            <body>
                <div id="root">${renderedApp}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('server: listening');
});