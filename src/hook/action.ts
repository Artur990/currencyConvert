import localforage from 'localforage'
import { useQuery, useQueryClient } from 'react-query'
import { IGetConvertResponse } from '../types/currencyTypes'

export const HISTORY = 'History'
export const getCurr = async () => {
  const data = await localforage.getItem('currency')
  return (await data) as any[]
}

export const useLocalStorage = () => {
  const { data } = useQuery({ queryKey: [HISTORY], queryFn: () => getCurr() })
  const queryClient = useQueryClient()
  const clear = async () => {
    queryClient.refetchQueries({ queryKey: [HISTORY] })
    return localforage.clear()
  }
  return { data, clear }
}

export const setLocalStorage = async (
  props: IGetConvertResponse | undefined
) => {
  try {
    const data = (await localforage.getItem('currency')) as any[]
    const zmiena = [] as any[]
    if (!data) {
      zmiena.push(props)
      localforage.setItem('currency', zmiena)
    }
    zmiena.push(...data, props)
    localforage.setItem('currency', zmiena)
  } catch (error) {
    console.log(error)
  }
}
