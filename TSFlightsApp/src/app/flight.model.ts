export interface Flight {
    id?:Number;
    origin: string;
    destination: string;
    flightNumber: number;
    depart:Date;
    arrive: Date;
    nonstop: boolean
  };
