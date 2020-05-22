import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'; 

//import App from './../../pages/index';
import * as REACT_PAGES from '../../tmp/reactpages';

const app = express();
app.use(express.static('public'));
//app.use(ssrMiddleware());

app.get('*', (req, res) => {
    const App = REACT_PAGES['index'];
    console.log('>>! 1', Object.keys(REACT_PAGES));
    console.log('>>', App);
    const sheet = new ServerStyleSheet(); 
    const renderedApp = renderToString(sheet.collectStyles(<App />));
    const styles = sheet.getStyleTags();

    res.send(
        `<!DOCTYPE html>
        <html>
            <head>
            ${styles}
            </head>
            <body>
                <div id="Root">${renderedApp}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('server: listening');
});