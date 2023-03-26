export interface Protection {
    name: string
    alias: string
    type: string // 頭とか足とか
    class: number // 装備可能レベル
    series: string // ~set
    bullion: string // normal | criticalUp | doubleAndHalf | reduce | concentrationChanging
    successZone: Array<Array<number>>
}