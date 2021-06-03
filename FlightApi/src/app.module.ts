import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from './flights/flights.entity';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'transportation',
      entities: [Flights],
      synchronize: true,
    }),
    FlightsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
