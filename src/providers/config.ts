import { Injectable } from '@angular/core'

@Injectable()
export class Config {
  readonly priceInterval: number = 5000
  readonly minsInterval: number = 30000
  vw: number
  constructor() {

	}
}
