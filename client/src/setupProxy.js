const proxy = require("http-proxy-middleware");

const apiUrl = 'http://localhost:5000/';
const apiContext = ['/api'];

module.exports = function (app) {

    app.use(proxy(apiContext, { target: apiUrl, changeOrigin: true }));

};
