"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = require("express");
var ThemeAController_1 = __importDefault(require("../../controllers/ThemeAController"));
var ThemeARouter = /** @class */ (function () {
    function ThemeARouter() {
        this._router = (0, express_1.Router)();
        this._controller = ThemeAController_1.default;
        this._configure();
    }
    Object.defineProperty(ThemeARouter.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Connect routes to their matching controller endpoints.
     */
    ThemeARouter.prototype._configure = function () {
        var _this = this;
        this._router.get('/', function (req, res, next) {
            try {
                var result = _this._controller.defaultMethod();
                res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        });
    };
    return ThemeARouter;
}());
module.exports = new ThemeARouter().router;
