import { Component, Output, EventEmitter } from '@angular/core';
import { Car } from '../../types/carModel.interface';
import { v4 as uuid } from "uuid";
import { FormsModule } from '@angular/forms';
import { CarsDealershipServiceService } from '../../services/cars-dealership-service.service';

@Component({
  selector: 'app-create-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css'
})
export class CreateCarComponent {

  description: string = '';
  price: number = 0;
  brand: string = '';
  model: string = '';

  @Output() carCreated = new EventEmitter<Car>()

  constructor(private readonly carService: CarsDealershipServiceService){}

  createCar() {
    const newCar: Car = {
      id: uuid(),
      description: this.description,
      price: this.price,
      brand: this.brand,
      model: this.model
    };

    this.carService.addCar(newCar);
    //this.carCreated.emit(newCar);

    this.description = '';
    this.price = 0;
    this.brand = '';
    this.model = '';
  }
}
