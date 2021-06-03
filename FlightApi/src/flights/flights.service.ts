/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {DeleteResult, Repository, UpdateResult} from 'typeorm';
import { Flights } from './flights.entity';
import {from, Observable} from 'rxjs';
import {Flight} from "./flight.model";

@Injectable()
export class FlightsService {
  constructor(@InjectRepository(Flights)
  private readonly flightsRepository: Repository<Flights>,) {
}
public findAll():Observable<Flights[]>
{
return from(this.flightsRepository.find());
}
public async findOne(id: number):Promise<Flights>
    {
        return (this.flightsRepository.findOne(id));
    }
public create(flight:Flight)
{
    return this.flightsRepository.save(flight);
}
public async query(orig: string, dest: string): Promise<Flights[]> {
        return await this.flightsRepository.find({origin: orig, destination: dest});
    }
 public async update(flight: Flight): Promise<UpdateResult> {
        return await this.flightsRepository.update(flight.id, flight);
    }


 public async delete(id: number): Promise<any> {
        return this.flightsRepository.delete(id);
    }
 public   async getFlightOrigins(): Promise<String[]> {
        return this.flightsRepository.query("SELECT DISTINCT origin FROM flights");
    }

 public   async getFlightDestinations(): Promise<String[]> {
        return this.flightsRepository.query("SELECT DISTINCT destination FROM flights");
    }
 
}
