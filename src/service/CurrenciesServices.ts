import { apiClient } from '../libs/axios'
import {
  GetConvertData,
  GetConvertResponse,
  GetCurrenciesResponse,
} from '../types/currencyTypes'

const getCurrencies = async () => {
  const res = await apiClient.get<GetCurrenciesResponse>('fetch-all')
  return res.data
}

const getConvert = async ({ from, to, amount }: GetConvertData) => {
  const res = await apiClient.get<GetConvertResponse>('convert', {
    params: { from, to, amount },
  })
  return res.data
}

export const CurrenciesServices = {
  getConvert,
  getCurrencies,
}
