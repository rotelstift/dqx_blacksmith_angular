import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Weapon } from '../weapon';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.scss']
})
export class WeaponDetailComponent {
  weapon: Weapon | undefined

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.getWeapon()
  }

  getWeapon(): void {
    const alias = String(this.route.snapshot.paramMap.get('alias'))
    this.itemService.getWeapon(alias)
      .subscribe(weapon => this.weapon = weapon)
  }
}
