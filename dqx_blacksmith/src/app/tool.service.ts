import { Injectable } from '@angular/core'
import { Tool } from './tool'
import { TOOLS } from './tools'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor() { }

  getTools(): Observable<Tool[]> {
    const tools = of(TOOLS)
    return tools
  }

  getTool(alias: string): Observable<Tool> {
    const tool = TOOLS.find(t => t.alias === alias)!
    return of(tool)
  }
}
