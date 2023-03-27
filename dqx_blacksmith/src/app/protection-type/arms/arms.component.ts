import { Component, Input } from '@angular/core';
import { Protection } from 'src/app/protection';

@Component({
  selector: 'app-arms',
  templateUrl: './arms.component.html',
  styleUrls: ['./arms.component.scss']
})
export class ArmsComponent {
  @Input() arms?: Protection
  temperature?: number

  onSetTemperature(temperature: number) {
    this.temperature = temperature
  }
}
