"use strict";
var ThemeBController = /** @class */ (function () {
    function ThemeBController() {
    }
    ThemeBController.prototype.defaultMethod = function () {
        return {
            text: "You've reached the ".concat(this.constructor.name, " default method")
        };
    };
    return ThemeBController;
}());
module.exports = new ThemeBController();
