export interface Weapon {
    name: string
    alias: string
    type: string // 剣とかブーメランとか
    class: number // 装備可能レベル
    bullet: string // normal | criticalUp | doubleAndHalf | reduce | concentrationChanging
    successZone: Array<Array<number>>
}