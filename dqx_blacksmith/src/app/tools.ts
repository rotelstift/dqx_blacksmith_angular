import { Tool } from './tool'

export const TOOLS: Tool[] = [
  {
    name: '虹色のオーブ',
    alias: 'nijiiro-no-obu',
    type: 'material',
    bullet: 'reduce',
    successZone: [
      [85, 95],[140, 148],
      [115, 121],[140, 148],
      [115, 121],[85, 95],
    ]
  },
  {
    name: '光のフライパン',
    alias: 'hikari-no-furaipan',
    type: 'flyingPan',
    bullet: 'lightning',
    successZone: [
      [92, 102],[110, 120],
      [134, 146],[158, 164],
      [158, 164],[92, 102],
      [92, 102],
    ]
  }
]