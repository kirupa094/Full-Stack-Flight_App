"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.FlightsService = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var flights_entity_1 = require("./flights.entity");
var rxjs_1 = require("rxjs");
var FlightsService = /** @class */ (function () {
    function FlightsService(postRepository) {
        this.postRepository = postRepository;
    }
    FlightsService.prototype.findAll = function () {
        return rxjs_1.from(this.postRepository.find());
    };
    FlightsService.prototype.create = function () {
        this.postRepository.save({
            origin: 'Miami', destination: 'Chicago', flightNumber: 345,
            depart: '2020-02-25T23:18:21.932Z',
            arrive: '2020-02-25T23:21:21.932Z', nonstop: true
        });
    };
    FlightsService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(flights_entity_1.Flights))
    ], FlightsService);
    return FlightsService;
}());
exports.FlightsService = FlightsService;
