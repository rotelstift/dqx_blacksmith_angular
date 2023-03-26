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
  @Input() damage?: number
  @Input() temperature?: number

  canvas: Chart | any
  damageChartContext: CanvasRenderingContext2D | any;
  @ViewChild('canvas02') canvas02: ElementRef | any;

  ngOnChanges() {
    this.addDamage(this.canvas, this.damage ?? 0)
  }

  ngAfterViewInit() {
    const damageRange = this.damageCalculator.damageRange(this.temperature ?? 1000, this.bullion ?? 'normal')
    const canvasBackgroundColor = {
      id: 'canvasBackgroundColor',
      zone: this.successZone ?? [[]],
      positionNumber: this.positionNumber ?? 0,
      beforeDraw(chart:any, args:any, pluginOptions:any) {
        const { ctx, chartArea: { left, top, right, bottom }, scales: { x, y } } = chart
        ctx.fillStyle = 'rgba(16, 128, 16, 0.2)'
        // fullRect(left, top, right, bottom) の順。right と bottom の値は絶対値ではなく、
        // left top からの差分で計算してるっぽい
        ctx.fillRect(
          x.getPixelForValue(this.zone[this.positionNumber][0]),
          top,
          x.getPixelForValue(this.zone[this.positionNumber][1]-this.zone[this.positionNumber][0]),
          bottom
        )
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
            label: 'ダメージ量,成功ゾーン',
            data: [
              {x: [0, 0], y: 'damage'},
              {x: this.successZone[this.positionNumber], y: 'damage'}
            ],
            backgroundColor: [
              'rgba(255, 64, 64, 0.5)',
              'rgba(16, 128, 16, 0.5)'
            ],
            borderColor: [
              'rgba(255, 64, 64, 1.0)',
              'rgba(16, 128, 16, 1.0)'
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
        scales: {
          x: {
            min: 0,
            max: this.successZone![this.positionNumber!][1] + 30,
            ticks: {
              display: false,
              stepSize: 30
            }
          },
          y: {
            ticks: {
              display: false
            }
          }
        },
        layout: {
          padding: {
            left: -10,
            bottom: -10
          }
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
      chart.data.datasets[0].data = [
        {x: damageRange[0], y: 'damage'},
        {x: damageRange[2], y: 'damage'},
        {x: damageRange[4], y: 'damage'},
        {x: damageRange[6], y: 'damage'}
      ]
      chart.data.datasets[1].data[0] = {x: [0, damage], y: 'damage'}
      chart.data.datasets[2].data = [
        {x: damageRange[1], y: 'damage'},
        {x: damageRange[3], y: 'damage'},
        {x: damageRange[5], y: 'damage'}
      ]
      chart.update()
    }
  }
}
