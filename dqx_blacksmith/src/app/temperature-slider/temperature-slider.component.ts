import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-temperature-slider',
  templateUrl: './temperature-slider.component.html',
  styleUrls: ['./temperature-slider.component.scss']
})
export class TemperatureSliderComponent {
  constructor() {  }
  temperatureSliderControl = new FormControl(1000, {updateOn: 'change'})

  @Output() temperature = new EventEmitter<number>()

  ngOnInit(){
    this.temperatureSliderControl.valueChanges.subscribe(x => {
      // console.log(x)
      this.temperature.emit(x ?? 1000)
    })
  }
}
