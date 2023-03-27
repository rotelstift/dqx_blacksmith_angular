import { Component, Input } from '@angular/core';
import { Weapon } from 'src/app/weapon';

@Component({
  selector: 'app-double-handed-sword',
  templateUrl: './double-handed-sword.component.html',
  styleUrls: ['./double-handed-sword.component.scss']
})
export class DoubleHandedSwordComponent {
  @Input() doubleHandedSword?: Weapon
  temperature?: number

  onSetTemperature(temperature: number) {
    this.temperature = temperature
  }
}
