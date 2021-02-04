const proxy = require("http-proxy-middleware");

const apiUrl = 'https://movie.watchout.kr:5000/';
const apiContext = ['/api'];

module.exports = function (app) {

    app.use(proxy(apiContext, { target: apiUrl, changeOrigin: true }));

};
