import { useCallback } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CurrenciesServices } from '../service/CurrenciesServices'

import { IGetConvertData } from '../types/currencyTypes'
import { HISTORY, setLocalStorage } from './action'

export const CONVERT_KEY = 'CurrenciesExChange'

export const useCurrencyConvert = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { handleSubmit, watch, ...restForm } = useForm<IGetConvertData>({})
  const { from, to, amount } = watch()

  const query = useQuery({
    queryKey: [CONVERT_KEY],
    enabled: false,
    queryFn: () => CurrenciesServices.getConvert({ from, to, amount }),
  })
  const handleConvert = useCallback(
    handleSubmit(() => {
      query.refetch()
      if (query.data) {
        setLocalStorage(query.data)
        navigate('/history')
        queryClient.refetchQueries({ queryKey: [HISTORY] })
      }
      queryClient.refetchQueries({ queryKey: [HISTORY] })
    }),
    [handleSubmit, query.isSuccess]
  )

  return {
    form: {
      ...restForm,
      handleConvert,
      handleSubmit,
    },
    query,
  }
}
