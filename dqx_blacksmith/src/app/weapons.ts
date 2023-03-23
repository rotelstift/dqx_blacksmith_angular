import { Weapon } from "./weapon"

export const WEAPONS: Weapon[] = [
  {
    name: '天馬の大剣',
    alias: 'tenma-no-taiken',
    type: 'doubleHandedSword',
    class: 60,
    bullet: 'doubleAndHalf',
    successZone: [
      [70, 78], [132, 138],
      [100, 107], [70, 78],
      [70, 80], [60, 69],
      [85, 93], [85, 93]
    ]
  }
]