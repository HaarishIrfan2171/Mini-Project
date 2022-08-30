import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrancyComponent } from './currancy/currancy.component';
import { HomeComponent } from './home-component.component';
import { TempratureComponent } from './temprature/temprature.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'currancy',
    component: CurrancyComponent,
  },
  {
    path: 'temperature',
    component: TempratureComponent,
  },
];
