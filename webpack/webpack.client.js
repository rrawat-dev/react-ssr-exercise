const path = require("path");

module.exports = function(env, argv) {

    return {
        "entry": "./src/browser/index.js",
        "output": {
            "path": path.resolve(process.env.PWD, "public"),
            "filename": "bundle.js"
        },
        "devtool": "cheap-module-source-map",
        "module": {
            "rules": [
                {
                    "test": /\.js$/,
                    "exclude": /(node_modules)/,
                    "loader": "babel-loader",
                    "query": {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            ]
        }
    };
};