import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DamageCalculatorService {
  // 定数の設定
  normalHit: number = 1
  doubleHit: number = 2
  halfHit: number = 0.5

  base_value_min: number = 12
  base_value_max: number = 18

  half: number = 0.5
  weakly: number = 0.8
  normal: number = 1.0
  strongly: number = 1.2
  double: number = 2.0
  heat: number = 2.5
  triple: number = 3.0

  constructor(  ) { }

  damageRange(temperature: number, bullion: string = 'normal', damage: number = 0): Array<Array<number>> {
    return this.baseDamageRange(temperature, bullion).map(baseDamage => [baseDamage[0] + damage, baseDamage[1] + damage])
  }

  baseDamageRange(temperature: number, bullion: string = 'normal'): Array<Array<number>> {
    const actualTemperature = temperature
    if (temperature > 2000) {
      temperature = 2000
    }
    switch(bullion) {
      case 'criticalUp':
        if (actualTemperature % 200 === 0) {
          return [
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.half), this.damage(this.doubleHit, temperature, this.base_value_max, this.half)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.weakly), this.damage(this.doubleHit, temperature, this.base_value_max, this.weakly)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.normal), this.damage(this.doubleHit, temperature, this.base_value_max, this.normal)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.strongly), this.damage(this.doubleHit, temperature, this.base_value_max, this.strongly)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.double), this.damage(this.doubleHit, temperature, this.base_value_max, this.double)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.heat), this.damage(this.doubleHit, temperature, this.base_value_max, this.heat)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.triple), this.damage(this.doubleHit, temperature, this.base_value_max, this.triple)]
          ]
        }
        return [
          [this.damage(this.normalHit, temperature, this.base_value_min, this.half), this.damage(this.normalHit, temperature, this.base_value_max, this.half)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.weakly), this.damage(this.normalHit, temperature, this.base_value_max, this.weakly)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.normal), this.damage(this.normalHit, temperature, this.base_value_max, this.normal)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.strongly), this.damage(this.normalHit, temperature, this.base_value_max, this.strongly)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.double), this.damage(this.normalHit, temperature, this.base_value_max, this.double)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.heat), this.damage(this.normalHit, temperature, this.base_value_max, this.heat)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.triple), this.damage(this.normalHit, temperature, this.base_value_max, this.triple)]
        ]
      case 'doubleAndHalf':
        if (actualTemperature % 400 === 0) {
          return [
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.half), this.damage(this.doubleHit, temperature, this.base_value_max, this.half)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.weakly), this.damage(this.doubleHit, temperature, this.base_value_max, this.weakly)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.normal), this.damage(this.doubleHit, temperature, this.base_value_max, this.normal)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.strongly), this.damage(this.doubleHit, temperature, this.base_value_max, this.strongly)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.double), this.damage(this.doubleHit, temperature, this.base_value_max, this.double)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.heat), this.damage(this.doubleHit, temperature, this.base_value_max, this.heat)],
            [this.damage(this.doubleHit, temperature, this.base_value_min, this.triple), this.damage(this.doubleHit, temperature, this.base_value_max, this.triple)]
          ]
        }
        if (actualTemperature % 200 === 0) {
          return [
            [this.damage(this.halfHit, temperature, this.base_value_min, this.half), this.damage(this.halfHit, temperature, this.base_value_max, this.half)],
            [this.damage(this.halfHit, temperature, this.base_value_min, this.weakly), this.damage(this.halfHit, temperature, this.base_value_max, this.weakly)],
            [this.damage(this.halfHit, temperature, this.base_value_min, this.normal), this.damage(this.halfHit, temperature, this.base_value_max, this.normal)],
            [this.damage(this.halfHit, temperature, this.base_value_min, this.strongly), this.damage(this.halfHit, temperature, this.base_value_max, this.strongly)],
            [this.damage(this.halfHit, temperature, this.base_value_min, this.double), this.damage(this.halfHit, temperature, this.base_value_max, this.double)],
            [this.damage(this.halfHit, temperature, this.base_value_min, this.heat), this.damage(this.halfHit, temperature, this.base_value_max, this.heat)],
            [this.damage(this.halfHit, temperature, this.base_value_min, this.triple), this.damage(this.halfHit, temperature, this.base_value_max, this.triple)]
          ]
        }
        return [
          [this.damage(this.normalHit, temperature, this.base_value_min, this.half), this.damage(this.normalHit, temperature, this.base_value_max, this.half)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.weakly), this.damage(this.normalHit, temperature, this.base_value_max, this.weakly)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.normal), this.damage(this.normalHit, temperature, this.base_value_max, this.normal)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.strongly), this.damage(this.normalHit, temperature, this.base_value_max, this.strongly)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.double), this.damage(this.normalHit, temperature, this.base_value_max, this.double)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.heat), this.damage(this.normalHit, temperature, this.base_value_max, this.heat)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.triple), this.damage(this.normalHit, temperature, this.base_value_max, this.triple)]
        ]
      default:
        return [
          [this.damage(this.normalHit, temperature, this.base_value_min, this.half), this.damage(this.normalHit, temperature, this.base_value_max, this.half)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.weakly), this.damage(this.normalHit, temperature, this.base_value_max, this.weakly)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.normal), this.damage(this.normalHit, temperature, this.base_value_max, this.normal)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.strongly), this.damage(this.normalHit, temperature, this.base_value_max, this.strongly)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.double), this.damage(this.normalHit, temperature, this.base_value_max, this.double)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.heat), this.damage(this.normalHit, temperature, this.base_value_max, this.heat)],
          [this.damage(this.normalHit, temperature, this.base_value_min, this.triple), this.damage(this.normalHit, temperature, this.base_value_max, this.triple)]
        ]
    }
  }

  damage(hitRate: number, temperature: number, base_value: number, magnification: number): number {
    return Math.ceil(hitRate * Math.ceil((0.5 + 0.0005 * temperature) * Math.ceil(base_value * magnification)))
  }
}
