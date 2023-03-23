import { Protection } from "./protection" 

export const PROTECTIONS: Protection[] = [
  {
    name: '天宮騎士のかぶと',
    alias: 'tenkyukishi-no-kabuto',
    type: 'metes',
    class: 85,
    series: 'tenkyukishiSet',
    bullet: 'criticalUp',
    successZone: [
      [190, 202], [239, 245],
      [190, 202], [239, 245]
    ]
  },
  {
    name: '天宮騎士のよろい上',
    alias: 'tenkyukishi-no-yoroi-ue',
    type: 'tops',
    class: 85,
    series: 'tenkyukishiSet',
    bullet: 'criticalUp',
    successZone: [
      [141, 149], [141, 149],
      [166, 177], [166, 177],
      [122, 128], [122, 128],
    ]
  },
  {
    name: '天宮騎士のよろい下',
    alias: 'tenkyukishi-no-yoroi-sita',
    type: 'bottoms',
    class: 85,
    series: 'tenkyukishiSet',
    bullet: 'criticalUp',
    successZone: [
      [111, 117], [152, 160],
      [152, 160], [111, 117],
      [90, 98], [90, 98],
      [75, 85], [75, 85],
    ]
  },
  {
    name: '天宮騎士のこて',
    alias: 'tenkyukishi-no-kote',
    type: 'arms',
    class: 85,
    series: 'tenkyukishiSet',
    bullet: 'criticalUp',
    successZone: [
      [280, 291],
      [245, 255],
      [333, 339]
    ]
  },
  {
    name: '天宮騎士のグリーブ',
    alias: 'tenkyukishi-no-guribu',
    type: 'foots',
    class: 85,
    series: 'tenkyukishiSet',
    bullet: 'criticalUp',
    successZone: [
                  [190, 201],
                  [220, 230],
      [190, 201], [258, 264],
    ]
  }
]