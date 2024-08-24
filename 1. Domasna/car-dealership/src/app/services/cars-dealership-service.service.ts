import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CARS_DATA } from '../data/cars-data';
import { Car } from '../types/carModel.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsDealershipServiceService {

  private _cars = new BehaviorSubject(CARS_DATA)
cars$ = this._cars.asObservable();

  constructor() { };

  addCar(car: Car){
    const carsValue = this._cars.value
    this._cars.next([...carsValue, car])
  };

  removeCar(carID: string){
    const removeCar = this._cars.getValue().filter((car) => car.id !== carID)
    this._cars.next(removeCar)
  }
}
