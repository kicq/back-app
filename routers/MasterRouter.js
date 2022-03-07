"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = require("express");
var ThemeARouter_1 = __importDefault(require("./themeA/ThemeARouter"));
var ThemeBRouter_1 = __importDefault(require("./themeB/ThemeBRouter"));
var MasterRouter = /** @class */ (function () {
    function MasterRouter() {
        this._router = (0, express_1.Router)();
        this._subrouterA = ThemeARouter_1.default;
        this._subrouterB = ThemeBRouter_1.default;
        this._configure();
    }
    Object.defineProperty(MasterRouter.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Connect routes to their matching routers.
     */
    MasterRouter.prototype._configure = function () {
        this._router.use('/themeA', this._subrouterA);
        this._router.use('/themeB', this._subrouterB);
    };
    return MasterRouter;
}());
module.exports = new MasterRouter().router;
