import { apiClient } from '../configs/axios'
import {
  IGetConvertData,
  IGetConvertResponse,
  IGetCurrenciesResponse,
} from '../types/currencyTypes'

const getCurrencies = async () => {
  const res = await apiClient.get<IGetCurrenciesResponse>('fetch-all')
  return res.data
}

const getConvert = async ({ from, to, amount }: IGetConvertData) => {
  const res = await apiClient.get<IGetConvertResponse>('convert', {
    params: { from, to, amount },
  })
  return res.data
}

export const CurrenciesServices = {
  getConvert,
  getCurrencies,
}
