import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { DealershipInfoComponent } from './components/dealership-info/dealership-info.component';
import { CarsComponent } from './components/cars/cars.component';
import { Car } from './types/carModel.interface';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, DealershipInfoComponent, CarsComponent, CreateCarComponent, FormsModule, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-dealership';

  cars: Car[] = [
  {
    id: '1',
    description: 'Brand new',
    price: 110000,
    brand: 'Mercedes - Benz',
    model: 'S Class 550'
  },
  {
    id: '2',
    description: 'Brand new',
    price: 80000,
    brand: 'BMW',
    model: '530d'
  }
];

addCar (newCar: Car){
  this.cars.push(newCar)
};

}
