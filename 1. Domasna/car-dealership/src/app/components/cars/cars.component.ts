import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Car } from '../../types/carModel.interface';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
@Input() cars: Car[] = []
}
