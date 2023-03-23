import { Component, Input } from '@angular/core'
import { Tool } from '../tool'

@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.scss']
})
export class ToolDetailComponent {
  @Input() tool?: Tool
}
