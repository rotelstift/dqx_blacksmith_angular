import { AfterViewInit, Input, Component, ElementRef, ViewChild } from '@angular/core'
import { Chart, registerables } from 'chart.js'
import { DamageCalculatorService } from '../damage-calculator.service'

Chart.register(...registerables)

@Component({
  selector: 'app-chart-canvas',
  templateUrl: './chart-canvas.component.html',
  styleUrls: ['./chart-canvas.component.scss']
})
export class ChartCanvasComponent implements AfterViewInit {
  constructor(
    private damageCalculator: DamageCalculatorService
  ) {  }
  @Input() successZone: Array<Array<number>> | any
  @Input() bullion?: string
  @Input() positionNumber: number | any
  @Input() damage: number | any
  @Input() temperature?: number

  canvas: Chart | any
  damageChartContext: CanvasRenderingContext2D | any;
  @ViewChild('canvas02') canvas02: ElementRef | any;

  overDamage = (itemMax:number, damageMax:number) => {
    return itemMax - damageMax;
  }
  
  fakeCritical = (itemMax:number, damageMin:number) => {
    return itemMax - damageMin * 2;
  }

  ngOnChanges() {
    this.addDamage(this.canvas, this.damage ?? 0)
  }

  ngAfterViewInit() {
    const damageRange = this.damageCalculator.damageRange(this.temperature ?? 1000, this.bullion ?? 'normal')
    const baseDamageRange = this.damageCalculator.baseDamageRange(this.temperature ?? 1000, this.bullion)
    const canvasBackgroundColor = {
      id: 'canvasBackgroundColor',
      zone: this.successZone ?? [[]],
      positionNumber: this.positionNumber ?? 0,
      fakeCritical: this.fakeCritical,
      overDamage: this.overDamage,
      afterDatasetDraw(chart:any, args:any, pluginOptions:any) {
        const { ctx, chartArea: { left, top, right, bottom }, scales: { x, y } } = chart

        const bgColors = (bracketLow:number, bracketHigh:number, color:string) => {
          ctx.fillStyle = color
          ctx.fillRect(
            x.getPixelForValue(bracketLow),
            top,
            x.getPixelForValue(bracketHigh - bracketLow),
            bottom
          )
        }

        if (args.index == 1) {
          bgColors(this.zone[this.positionNumber][0], this.zone[this.positionNumber][1], 'rgba(16, 128,  16, 0.2)')
        } else if (args.index == 2) {
          const damageStrong = args.meta._dataset.data[1].x
          bgColors(
            this.fakeCritical(this.zone[this.positionNumber][1], damageStrong[0]), 
            this.overDamage(this.zone[this.positionNumber][1], damageStrong[1]),
            'rgba(192, 64, 255, 0.2)'
          )
        } else if (args.index == 0) {
          const damageNormal = args.meta._dataset.data[1].x
          bgColors(
            this.fakeCritical(this.zone[this.positionNumber][1], damageNormal[0]), 
            this.overDamage(this.zone[this.positionNumber][1], damageNormal[1]),
            'rgba(255, 64, 192, 0.2)'
          )
        }
      }
    }
    this.damageChartContext = this.canvas02.nativeElement.getContext('2d');
    this.canvas = new Chart(this.damageChartContext, {
      type: "bar",
      data: {
        datasets: [
          {
            label: '手加減打ち,叩く,2倍打ち,3倍打ち',
            data: [
              {x: damageRange[0], y: 'damage'},
              {x: damageRange[2], y: 'damage'},
              {x: damageRange[4], y: 'damage'},
              {x: damageRange[6], y: 'damage'}
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 205, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
            borderSkipped: false
          },
          {
            label: 'ダメージ量,狙い目ゾーン,上下狙い目ゾーン,成功ゾーン',
            data: [
              {x: [0, 0], y: 'damage'},
              {x: [
                this.fakeCritical(this.successZone[this.positionNumber][1], baseDamageRange[2][0]), 
                this.overDamage(this.successZone[this.positionNumber][1], baseDamageRange[2][1]),
              ], y: 'damage'},
              {x: [
                this.fakeCritical(this.successZone[this.positionNumber][1], baseDamageRange[3][0]), 
                this.overDamage(this.successZone[this.positionNumber][1], baseDamageRange[3][1])
              ], y: 'damage'},
              {x: this.successZone[this.positionNumber], y: 'damage'}
            ],
            backgroundColor: [
              'rgba(255, 64, 64, 0.5)',
              'rgba(255, 64, 192, 0.5)',
              'rgba(192, 64, 255, 0.5)',
              'rgba(16, 128, 16, 0.5)'
            ]
          },
          {
            label: '乱れ打ち,上下打ち,熱風おろし',
            data: [
              {x: damageRange[1], y: 'damage'},
              {x: damageRange[3], y: 'damage'},
              {x: damageRange[5], y: 'damage'}
            ],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            borderSkipped: false
          }
        ]
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        animation: false,
        scales: {
          x: {
            min: 0,
            max: this.successZone![this.positionNumber!][1] + 30,
            ticks: {
              display: false,
              stepSize: 30
            },
            grid: {
              drawTicks: false
            }
          },
          y: {
            ticks: {
              display: false
            },
            grid: {
              drawTicks: false
            }
          },
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title(tooltipItem) {
                  const labels = tooltipItem[0].dataset.label?.split(',') ?? []
                  return labels[tooltipItem[0].dataIndex]
              },
              label(tooltipItem) {
                return tooltipItem.formattedValue
              }
            }
          }
        }
      },
      plugins: [canvasBackgroundColor]
    })
  }

  addDamage = (chart:Chart | any, damage:number) => {
    if(chart) {
      const damageRange = this.damageCalculator.damageRange(this.temperature ?? 1000, this.bullion ?? 'normal', damage)
      const baseDamageRange = this.damageCalculator.baseDamageRange(this.temperature ?? 1000, this.bullion)
      chart.data.datasets[0].data = [
        {x: damageRange[0], y: 'damage'},
        {x: damageRange[2], y: 'damage'},
        {x: damageRange[4], y: 'damage'},
        {x: damageRange[6], y: 'damage'}
      ]
      chart.data.datasets[1].data[0] = {x: [0, damage], y: 'damage'}
      chart.data.datasets[1].data[1] = {x: [
        this.fakeCritical(this.successZone[this.positionNumber][1], baseDamageRange[2][0]), 
        this.overDamage(this.successZone[this.positionNumber][1], baseDamageRange[2][1])
      ], y: 'damage'}
      chart.data.datasets[1].data[2] = {x: [
        this.fakeCritical(this.successZone[this.positionNumber][1], baseDamageRange[3][0]), 
        this.overDamage(this.successZone[this.positionNumber][1], baseDamageRange[3][1]),
      ], y: 'damage'}
      chart.data.datasets[2].data = [
        {x: damageRange[1], y: 'damage'},
        {x: damageRange[3], y: 'damage'},
        {x: damageRange[5], y: 'damage'}
      ]
      chart.update()
    }
  }
}
