/* eslint-disable prettier/prettier */
import {Body, Controller, Delete, Get, Param, Patch, Post,} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';
import { Observable } from 'rxjs';
import {DeleteResult, UpdateResult} from "typeorm";


@Controller('flights')
export class FlightsController {
  constructor(private flightservice:FlightsService){}
    @Get()
    findAll():Observable<Flights[]>{
        return this.flightservice.findAll();
    }
    @Post()
    create(@Body() flight: Flight){
        return this.flightservice.create(flight);
    }
    @Get(":id")
    async findOne(@Param() param): Promise<Flights>{
        return this.flightservice.findOne(param.id);
    }
    @Get("query/:orig/:dest")
    async query(@Param('orig') orig, @Param('dest') dest): Promise<Flights[]> {
        return this.flightservice.query(orig,dest);
    }
    @Post(":id/update")
    async update(@Param('id') id, @Body() flight: Flight): Promise<UpdateResult> {
        flight.id = Number(id);
        return this.flightservice.update(flight);
    }
    @Post(":id/delete")
    async delete(@Param('id') id): Promise<DeleteResult> {
        return this.flightservice.delete(id);
    }
    @Get("cities/origins")
    getOrigins(): Promise<String[]> {
        return this.flightservice.getFlightOrigins();
    }

    @Get("cities/destinations")
    getDestinations(): Promise<String[]> {
        return this.flightservice.getFlightDestinations();
    }
}
