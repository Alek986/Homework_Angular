import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Car } from '../../types/carModel.interface';
import { CarsDealershipServiceService } from '../../services/cars-dealership-service.service';
import { FilterByBrandPipe } from '../../pipes/filter-by-brand.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FilterByBrandPipe, FormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  @Input() cars: Car[] = [];

  carsObservable = signal<Car[]>([]);
  filterBrandValue = signal('');
  filterFromPrice = signal(undefined);
  filterToPrice = signal(undefined);

  constructor(private readonly carsDealershipService: CarsDealershipServiceService) { }


  ngOnInit() {
    this.carsDealershipService.cars$.subscribe((data) => {
      this.carsObservable.set(data)
    })
  };

  removeCar(carID: string){
    this.carsDealershipService.removeCar(carID)
  };

  // onInputChange(event: Event){
  //   const target = event.target as HTMLInputElement;
  //   const value = target.value;
  //   this.filterBrandValue.set(value);
  // };
}
