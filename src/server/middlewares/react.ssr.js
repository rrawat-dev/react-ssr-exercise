var ReactDOMServer = require('react-dom/server');
var config = require('../../config/config');
const path = require('path');
var fs = require('fs');

module.exports = function(options) {
    //const manifest = require('../../dist/client/manifest.json');
    return function (req, res, next) {
        const page = req.path.split('/')[1] || 'home';
        
        if (!global.REACT_SSR_PAGES[page]) {
            next();
        }

        if (!(global.REACT_SSR_PAGES[page].getServerProps)) {
            res.send(ReactDOMServer.renderToString(global.REACT_SSR_PAGES[page]()));
        }

        global.REACT_SSR_PAGES[page].getServerProps().then((props) => {
            console.log('+++ ', props);
            res.send(ReactDOMServer.renderToString(global.REACT_SSR_PAGES[page].default(props)));
        });
    };
};