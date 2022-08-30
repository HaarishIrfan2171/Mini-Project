import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';

interface City {
  cityName: String;
  cityId: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  cities: City[] = [
    {
      cityName: 'Chennai',
      cityId: 'Chennai',
    },
    {
      cityName: 'Coimbatore',
      cityId: 'Coimbatore',
    },
    {
      cityName: 'Madurai',
      cityId: 'Madurai',
    },
    {
      cityName: 'Kanyakumari',
      cityId: 'Kanyakumari',
    },
  ];
  Mycity: String = '';
  displayedColumns = [
    'date',
    'sunrice',
    'sunset',
    'moonrice',
    'moonset',
    'condition',
  ];
  dataSource = new MatTableDataSource<any>([]);
  constructor(
    private router: Router,
    private service: MyserviceService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  route(type: any) {
    if (type == 1) {
      this.router.navigate(['/home']);
    } else if (type == 2) {
      this.router.navigate(['/home/currancy']);
    } else if (type == 3) {
      this.router.navigate(['/home/temperature']);
    }
  }

  view(Value) {
    this.spinner.show();
    let obj = {
      days: 10,
      key: '79fdd8c862a14acf98b151620222408',
      Value: 10,
      q: Value.cityId,
    };
    this.service.getforcast(obj).subscribe((res) => {
      setTimeout(() => {
        this.spinner.hide();
        this.dataSource = new MatTableDataSource<any>(res.forecast.forecastday);
      }, 500);
    });
  }
}
