import { Component, Input } from '@angular/core'
import { Tool } from 'src/app/tool'

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  @Input() material?: Tool
  temperature?: number

  onSetTemperature(temperature: number) {
    this.temperature = temperature
  }
}
