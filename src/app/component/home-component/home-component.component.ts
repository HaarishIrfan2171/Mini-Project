import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  route(type: any) {
    if (type == 1) {
      this.router.navigate(['/home/weather']);
    } else if (type == 2) {
      this.router.navigate(['/home/currancy']);
    } else if (type == 3) {
      this.router.navigate(['/home/temperature']);
    }
  }
}
