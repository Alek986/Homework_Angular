import { Component } from '@angular/core';
import { Car } from '../../types/car.interface';
import { Observable, map} from 'rxjs';
import { CarService } from '../../services/car/car.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [MatGridListModule, AsyncPipe, CurrencyPipe, MatCardModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  cars$: Observable<Car[]> = new Observable<Car[]>();
  
  constructor (private readonly carService: CarService){}

  ngOnInit(){
    this.cars$= this.carService.getCars().pipe(
      map(response=>response.payload)
    )
  }
}
