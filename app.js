"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var MasterRouter_1 = __importDefault(require("./routers/MasterRouter"));
// load the environment variables from the .env file
dotenv_1.default.config({
    path: '.env'
});
/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.router = MasterRouter_1.default;
    }
    return Server;
}());
// initialize server app
var server = new Server();
// make server app handle any route starting with '/api'
server.app.use('/api', server.router);
// make server app handle any error
server.app.use(function (err, req, res, next) {
    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message
    });
});
// make server listen on some port
(function (port) {
    if (port === void 0) { port = process.env.APP_PORT || 5000; }
    server.app.listen(port, function () { return console.log("> Listening on port ".concat(port)); });
})();
