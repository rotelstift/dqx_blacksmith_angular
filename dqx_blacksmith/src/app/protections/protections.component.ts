import { Component } from '@angular/core'
import { PROTECTIONS } from '../protections'

@Component({
  selector: 'app-protections',
  templateUrl: './protections.component.html',
  styleUrls: ['./protections.component.scss']
})
export class ProtectionsComponent {
  protections = PROTECTIONS
}
