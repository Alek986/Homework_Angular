import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cars', component: CarsComponent}
];
