import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../types/carModel.interface';

@Pipe({
  name: 'filterByBrand',
  standalone: true
})
export class FilterByBrandPipe implements PipeTransform {
  //**First solution *///**First solution */
  //transform(cars: Car [], brand: string): Car [] {

  //   if (!brand) return cars;

  //   const filteredCars = cars.filter((car) => car.brand.toLowerCase().includes(brand.toLowerCase().trim()));

  //   return filteredCars;
  // };

  //**Bonus solution */
  transform(cars: Car[], brand?: string, fromPrice?: number, toPrice?: number): Car[] {
    
    let filteredCars = cars

    if (brand) {
      filteredCars = filteredCars.filter((car) => car.brand.toLowerCase().includes(brand.toLowerCase().trim()))
    };

    if (fromPrice) {
      filteredCars = filteredCars.filter((car) => car.price >= fromPrice)
    };

    if (toPrice) {
      filteredCars = filteredCars.filter((car) => car.price <= toPrice)
    };

    return filteredCars;
  };
}
