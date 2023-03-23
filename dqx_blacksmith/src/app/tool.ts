export interface Tool {
    name: string
    alias: string
    type: string // 針とかフライパンとか素材とか
    bullet: string // normal | lightning | doubleAndHalf | reduce
    successZone: Array<Array<number>>
}