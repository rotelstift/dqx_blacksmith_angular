import { Component } from '@angular/core'
import { Tool } from '../tool'
import { TOOLS } from '../tools'

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  tools = TOOLS
  selectedTool?: Tool;

  onSelect(tool: Tool): void {
    this.selectedTool = tool;
  }
}
