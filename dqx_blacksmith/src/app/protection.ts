export interface Protection {
    name: string
    alias: string
    type: string // 頭とか足とか
    class: number // 装備可能レベル
    series: string // ~set
    bullet: string // normal | lightning | doubleAndHalf | reduce
    successZone: Array<Array<number>>
}