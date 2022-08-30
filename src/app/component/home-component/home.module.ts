import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from './weather/weather.component';
import { CurrancyComponent } from './currancy/currancy.component';
import { TempratureComponent } from './temprature/temprature.component';
import { RouterModule } from '@angular/router';
import { routes } from './home-routing.module';
import { SharedMaterialModule } from 'src/app/sharedmodule/shared-material.module';
import { HomeComponent } from './home-component.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WeatherComponent,
    CurrancyComponent,
    TempratureComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
