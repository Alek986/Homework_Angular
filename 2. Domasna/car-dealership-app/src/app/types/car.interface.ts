import { Brand } from "./brand.enum";
import { Fuel } from "./fuel.enum";
import { Location } from "./location.interface";
import { Transmission } from "./transmission.enum";
import { Type } from "./type.enum";


export interface Car {
    id: string;
    description: string;
    price: number;
    images: string[];
    type: Type;
    year: number;
    color: string;
    fuelType: Fuel;
    distance: number;
    isNew: boolean;
    location: Location;
    brand: Brand;
    model: string;
    enginePower: number;
    doors: number;
    seats: number;
    transmission: Transmission
  }