"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FlightsController = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var FlightsController = /** @class */ (function () {
    function FlightsController(flightservice) {
        this.flightservice = flightservice;
    }
    FlightsController.prototype.findAll = function () {
        return this.flightservice.findAll();
    };
    FlightsController.prototype.create = function () {
        this.flightservice.create();
        return 'Ok';
    };
    __decorate([
        common_1.Get()
    ], FlightsController.prototype, "findAll");
    __decorate([
        common_1.Get()
    ], FlightsController.prototype, "create");
    FlightsController = __decorate([
        common_1.Controller('flights')
    ], FlightsController);
    return FlightsController;
}());
exports.FlightsController = FlightsController;
