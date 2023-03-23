import { Component } from '@angular/core'
import { WEAPONS } from '../weapons'

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent {
  weapons = WEAPONS
}
