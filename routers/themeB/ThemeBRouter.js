"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = require("express");
var ThemeBController_1 = __importDefault(require("../../controllers/ThemeBController"));
var ThemeBRouter = /** @class */ (function () {
    function ThemeBRouter() {
        this._router = (0, express_1.Router)();
        this._controller = ThemeBController_1.default;
        this._configure();
    }
    Object.defineProperty(ThemeBRouter.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Connect routes to their matching controller endpoints.
     */
    ThemeBRouter.prototype._configure = function () {
        var _this = this;
        this._router.get('/', function (req, res, next) {
            res.status(200).json(_this._controller.defaultMethod());
        });
    };
    return ThemeBRouter;
}());
module.exports = new ThemeBRouter().router;
