import { apiClient } from "../libs/axios";

export interface GetCurrenciesResponse {
  base: string;
  results: { [key: string]: number };
}

const getCurrencies = async () => {
  const res = await apiClient.get<GetCurrenciesResponse>("fetch-all");
  return res.data;
};

export interface GetConvertData {
  from: string;
  to: string;
  amount: string;
}

interface GetConvertResponse {
  base: string;
  amount: number;
  result: { [key: string]: number };
  ms: number;
}

const getConvert = async ({ from, to, amount }: GetConvertData) => {
  const res = await apiClient.get<GetConvertResponse>("convert", {
    params: { from, to, amount },
  });
  return res.data;
};

export const CurrenciesServices = {
  getConvert,
  getCurrencies,
};
