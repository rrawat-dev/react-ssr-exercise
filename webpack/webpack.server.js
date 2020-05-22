const path = require("path");
const fs = require('fs');

module.exports = function(env, argv) {
    const APP_ROOT = process.env.PWD;
    const dir = fs.readdirSync(path.resolve(APP_ROOT, "pages"));

    const imports = [];
    const exports = [];

    dir.forEach((file) => {
        const filename = file.split('.')[0];
        imports.push(`export {default as ${filename}} from "../pages/${file}";`);
        //exports.push(`export ${filename};`);
    });

    fs.writeFileSync(
        "tmp/reactpages.js",
        imports.concat(exports).join("\n"),
        {"flag": "w"}
    );

    return {
        "target": "node",
        "entry": "./src/server/index.js",
        "output": {
            "path": path.resolve(process.env.PWD),
            "filename": "server.js"
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