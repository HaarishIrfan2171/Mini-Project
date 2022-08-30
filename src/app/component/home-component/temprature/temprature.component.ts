import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.scss'],
})
export class TempratureComponent implements OnInit {
  temperatureForm: FormGroup;
  constructor(private router: Router, private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form();
  }

  /*********** Temprature Form ***********/
  form() {
    this.temperatureForm = this.formbuilder.group({
      fahrenheit: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?(0|[1-9][0-9]*)$'),
      ]),
      Celsius: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?(0|[1-9][0-9]*)$'),
      ]),
    });
  }

  route(type: any) {
    if (type == 1) {
      this.router.navigate(['/home']);
    } else if (type == 2) {
      this.router.navigate(['/home/weather']);
    } else if (type == 3) {
      this.router.navigate(['/home/currancy']);
    }
  }

  Calcuate(value, type) {
    if (type == 1) {
      if (this.temperatureForm.get('fahrenheit').valid) {
        this.temperatureForm
          .get('Celsius')
          .setValue(Math.round((value - 32) * 0.5556));
        this.temperatureForm.get('Celsius').markAsTouched();
        this.temperatureForm.get('Celsius').updateValueAndValidity();
      }
    } else {
      if (this.temperatureForm.get('Celsius').valid) {
        this.temperatureForm
          .get('fahrenheit')
          .setValue(Math.round(value * 1.8 + 32));
        this.temperatureForm.get('fahrenheit').markAsTouched();
        this.temperatureForm.get('fahrenheit').updateValueAndValidity();
      }
    }
  }
}
