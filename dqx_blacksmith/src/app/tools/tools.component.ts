import { Component } from '@angular/core'
import { TOOLS } from '../tools'

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  tools = TOOLS
}
