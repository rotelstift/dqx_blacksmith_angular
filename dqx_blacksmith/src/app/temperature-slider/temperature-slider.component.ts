import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-temperature-slider',
  templateUrl: './temperature-slider.component.html',
  styleUrls: ['./temperature-slider.component.scss']
})
export class TemperatureSliderComponent {
  temperatureSliderControl = new FormControl()
  temperatureNumberControl = new FormControl()
}
