import { Component, Input } from '@angular/core';
import { Protection } from 'src/app/protection';

@Component({
  selector: 'app-foots',
  templateUrl: './foots.component.html',
  styleUrls: ['./foots.component.scss']
})
export class FootsComponent {
  @Input() foots?: Protection
  temperature?: number

  onSetTemperature(temperature: number) {
    this.temperature = temperature
  }
}
