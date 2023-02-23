export interface IGetConvertResponse {
  base: string
  amount: number
  result: { [key: string]: number }
  ms: number
}

export interface IGetConvertData {
  from: string
  to: string
  amount: number
}

export interface IGetCurrenciesResponse {
  base: string
  amount: number
  results: { [key: string]: number }
}
