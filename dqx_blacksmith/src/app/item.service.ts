import { Injectable } from '@angular/core'
import { Tool } from './tool'
import { TOOLS } from './tools'
import { Observable, of } from 'rxjs'
import { Protection } from './protection'
import { PROTECTIONS } from './protections'
import { Weapon } from './weapon'
import { WEAPONS } from './weapons'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getTools(): Observable<Tool[]> {
    const tools = of(TOOLS)
    return tools
  }

  getTool(alias: string): Observable<Tool> {
    const tool = TOOLS.find(t => t.alias === alias)!
    return of(tool)
  }

  getProtections(): Observable<Protection[]> {
    const protections = of(PROTECTIONS)
    return protections
  }

  getProtection(alias: string): Observable<Protection> {
    const protection = PROTECTIONS.find(p => p.alias === alias)!
    return of(protection)
  }

  getWeapons(): Observable<Weapon[]> {
    const weapons = of(WEAPONS)
    return weapons
  }

  getWeapon(alias: string): Observable<Weapon> {
    const weapon = WEAPONS.find(w => w.alias === alias)!
    return of(weapon)
  }
}
