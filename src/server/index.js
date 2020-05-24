import express from 'express';
import reactssr from './middlewares/react.ssr';

const app = express();
app.use(express.static('public'));
app.use(express.static('assets'));
app.use(reactssr());

app.get('*', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html>
            <head>
            ${res.react.styles}
            <script>window.__REACT_SSR_PAGE__ = "${res.react.page}";</script>
            </head>
            <body>
                <div id="root" class="App">${res.react.html}</div>
                <script>var __REACT_SSR_APP_STATE__ = ${JSON.stringify(res.react.reduxState)}</script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('server: listening');
});