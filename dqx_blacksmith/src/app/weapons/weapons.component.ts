import { Component } from '@angular/core'
import { ItemService } from '../item.service'
import { Weapon } from '../weapon'

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent {
  weapons: Weapon[] = []

  constructor(
    private itemService: ItemService
  ) {  }

  ngOnInit(): void {
    this.getWeapons()
  }

  getWeapons(): void {
    this.itemService.getWeapons()
      .subscribe(weapons => this.weapons = weapons)
  }
}
