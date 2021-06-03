"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Flights = void 0;
/* eslint-disable prettier/prettier */
var typeorm_1 = require("typeorm");
var Flights = /** @class */ (function () {
    function Flights() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Flights.prototype, "id");
    __decorate([
        typeorm_1.Column("varchar", { length: 20 })
    ], Flights.prototype, "origin");
    __decorate([
        typeorm_1.Column("varchar", { length: 20 })
    ], Flights.prototype, "destination");
    __decorate([
        typeorm_1.Column('int')
    ], Flights.prototype, "flightNumber");
    __decorate([
        typeorm_1.Column('timestamp with time zone')
    ], Flights.prototype, "depart");
    __decorate([
        typeorm_1.Column('timestamp with time zone')
    ], Flights.prototype, "arrive");
    __decorate([
        typeorm_1.Column('boolean')
    ], Flights.prototype, "nonstop");
    Flights = __decorate([
        typeorm_1.Entity()
    ], Flights);
    return Flights;
}());
exports.Flights = Flights;
