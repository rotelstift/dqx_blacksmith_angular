import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Protection } from '../protection'
import { Tool } from '../tool'
import { Weapon } from '../weapon'

@Component({
  selector: 'app-damage-form',
  templateUrl: './damage-form.component.html',
  styleUrls: ['./damage-form.component.scss']
})
export class DamageFormComponent {
  @Input() item?: Tool | Protection | Weapon
  @Input() positionNumber?: number
  @Input() temperature?: number
  damageFormControl = new FormControl()
}
