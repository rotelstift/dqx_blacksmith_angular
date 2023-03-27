import { Component, Input } from '@angular/core';
import { Protection } from 'src/app/protection';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.scss']
})
export class TopsComponent {
  @Input() tops?: Protection
  temperature?: number

  onSetTemperature(temperature: number) {
    this.temperature = temperature
  }

}
