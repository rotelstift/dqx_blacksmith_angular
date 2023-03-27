import { Component } from '@angular/core'
import { Tool } from '../tool'
import { ItemService } from '../item.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  tools: Tool[] = []

  constructor(
    private toolService: ItemService
  ) {}

  ngOnInit(): void {
    this.getTools()
  }

  getTools(): void {
    this.toolService.getTools()
      .subscribe(tools => this.tools = tools)
  }
}
