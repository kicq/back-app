"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ErrorHandler_1 = __importDefault(require("../models/ErrorHandler"));
var ThemeAController = /** @class */ (function () {
    function ThemeAController() {
    }
    ThemeAController.prototype.defaultMethod = function () {
        throw new ErrorHandler_1.default(501, 'Not implemented method');
    };
    return ThemeAController;
}());
module.exports = new ThemeAController();
