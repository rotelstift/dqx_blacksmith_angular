import { Component, Input } from '@angular/core';
import { Tool } from 'src/app/tool';

@Component({
  selector: 'app-flying-pan',
  templateUrl: './flying-pan.component.html',
  styleUrls: ['./flying-pan.component.scss']
})
export class FlyingPanComponent {
  @Input() flyingPan?: Tool

  onSetTemperature(temperature: number) {
    console.log(temperature)
  }
}
