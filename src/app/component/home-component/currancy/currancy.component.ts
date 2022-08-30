import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-currancy',
  templateUrl: './currancy.component.html',
  styleUrls: ['./currancy.component.scss'],
})
export class CurrancyComponent implements OnInit {
  currancy: any = ['USD', 'EUR', 'LKR', 'AUD', 'AZN'];
  displayedColumns = ['date', 'currancy'];
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
      this.router.navigate(['/home/weather']);
    } else if (type == 3) {
      this.router.navigate(['/home/temperature']);
    }
  }

  view(Value) {
    this.spinner.show();
    this.service.getCurrencylist().subscribe((res) => {
      let data = res.quotes;
      let FinalData: any = [];
      Object.keys(data).filter((resp, values) => {
        Object.keys(data[resp]).filter((responce, value1) => {
          if (responce == 'INR' + Value) {
            FinalData.push({ date: resp, currancy: data[resp][responce] });
          }
        });
      });
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
      this.dataSource = new MatTableDataSource<any>(FinalData);
    });
  }
}
