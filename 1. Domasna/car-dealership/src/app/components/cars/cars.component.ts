import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Car } from '../../types/carModel.interface';
import { CarsDealershipServiceService } from '../../services/cars-dealership-service.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  @Input() cars: Car[] = [];

  carsObservable = signal<Car[]>([]);

  constructor(private readonly carsDealershipService: CarsDealershipServiceService) { }


  ngOnInit() {
    this.carsDealershipService.cars$.subscribe((data) => {
      this.carsObservable.set(data)
    })
  };

  removeCar(carID: string){
    this.carsDealershipService.removeCar(carID)
  };
}
