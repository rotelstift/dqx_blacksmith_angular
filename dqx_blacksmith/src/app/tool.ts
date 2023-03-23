export interface Tool {
    name: string
    alias: string
    type: string // 針とかフライパンとか素材とか
    bullet: string // normal | criticalUp | doubleAndHalf | reduce | concentrationChanging
    successZone: Array<Array<number>>
}