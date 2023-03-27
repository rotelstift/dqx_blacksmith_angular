import { Component, Input } from '@angular/core';
import { Protection } from 'src/app/protection';

@Component({
  selector: 'app-metes',
  templateUrl: './metes.component.html',
  styleUrls: ['./metes.component.scss']
})
export class MetesComponent {
  @Input() metes?: Protection
  temperature?: number

  onSetTemperature(temperature: number) {
    this.temperature = temperature
  }
}
