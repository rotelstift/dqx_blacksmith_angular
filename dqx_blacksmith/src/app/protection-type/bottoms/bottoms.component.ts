import { Component, Input } from '@angular/core';
import { Protection } from 'src/app/protection';

@Component({
  selector: 'app-bottoms',
  templateUrl: './bottoms.component.html',
  styleUrls: ['./bottoms.component.scss']
})
export class BottomsComponent {
  @Input() bottoms?: Protection
  temperature?: number

  onSetTemperature(temperature: number) {
    this.temperature = temperature
  }
}
