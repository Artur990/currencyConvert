import { useQuery } from 'react-query'

import { CurrenciesServices } from '../service/CurrenciesServices'

export const useGetAllCurrencies = () => {
  const query = useQuery({
    queryKey: ['allCurrencies'],
    refetchIntervalInBackground: true,
    queryFn: () => CurrenciesServices.getCurrencies(),
  })
  return { query }
}
