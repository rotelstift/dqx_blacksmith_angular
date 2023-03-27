import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Protection } from '../protection';
import { Location } from '@angular/common'
import { ItemService } from '../item.service'

@Component({
  selector: 'app-protection-detail',
  templateUrl: './protection-detail.component.html',
  styleUrls: ['./protection-detail.component.scss']
})
export class ProtectionDetailComponent {
  protection: Protection | undefined

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.getProtection()
  }

  getProtection(): void {
    const alias = String(this.route.snapshot.paramMap.get('alias'))
    this.itemService.getProtection(alias)
      .subscribe(protection => this.protection = protection)
  }
}
