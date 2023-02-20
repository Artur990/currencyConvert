export interface GetConvertResponse {
  base: string
  amount: number
  result: { [key: string]: number }
  ms: number
}

export interface GetConvertData {
  from: string
  to: string
  amount: number
}

export interface GetCurrenciesResponse {
  base: string
  amount: number
  results: { [key: string]: number }
}
