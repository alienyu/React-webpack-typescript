let envConf;
let env = process.env.NODE_ENV;

if(env) {
    envConf = require("./env/release.js");
} else {
    envConf = require("./env/dev.js");
}
module.exports = envConf;