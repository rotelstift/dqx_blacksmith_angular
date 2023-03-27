import { Component, Input } from '@angular/core'
import { Tool } from '../tool'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { ItemService } from '../item.service'

@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.scss']
})
export class ToolDetailComponent {
  tool: Tool | undefined

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private toolService: ItemService
  ) {}

  ngOnInit(): void {
    this.getTool()
  }

  getTool(): void {
    const alias = String(this.route.snapshot.paramMap.get('alias'))
    this.toolService.getTool(alias)
      .subscribe(tool => this.tool = tool)
  }
}
