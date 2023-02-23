import { useGetAllCurrencies } from '../hook/useGetAllCurrencies'
import { useCurrencyConvert } from '../hook/useCurrencyConvert'

const CurrencyConvert = () => {
  const {
    form: {
      register,
      handleConvert,
      formState: { errors },
    },
  } = useCurrencyConvert()

  const { query } = useGetAllCurrencies()

  if (query.isLoading) {
    return (
      <div className="h-screen w-screen  bg-slate-700 p-2 text-2xl  font-bold text-white ">
        Loading...
      </div>
    )
  }
  if (query.isError) {
    return (
      <div className="h-screen w-screen  bg-slate-700 p-2 text-2xl  font-bold text-white ">
        Something went wrong
      </div>
    )
  }

  return (
    <div className="flex h-screen w-screen min-w-[320px] flex-col 	items-center justify-center  bg-slate-700">
      <div className="bg-orange border-b-gray-light g-12 flex  max-h-60 w-full justify-between rounded-sm    sm:w-8/12">
        <div className=" h-32  w-full rounded-md bg-slate-400 p-1 sm:w-3/4">
          <form onSubmit={handleConvert}>
            <div className=" h-35 flex   w-full justify-between gap-2 rounded-md bg-slate-400 p-3 ">
              <div className="w-2/6">
                <h2 className="w-full text-left text-lg font-bold">Amount</h2>
                <input
                  type="number"
                  min={1}
                  className="w-full"
                  {...register('amount', { required: true })}
                />
                {errors.amount && (
                  <span className="text-red-700">Enter quantity</span>
                )}
              </div>
              <div className="w-2/6">
                <h2 className="w-full text-left text-lg font-bold">From</h2>
                <select
                  {...register('from')}
                  className="w-full font-bold  text-slate-700 "
                >
                  {query.data?.results &&
                    Object.keys(query.data?.results).map((curr) => (
                      <option key={curr} value={curr} label={curr}>
                        {curr}
                      </option>
                    ))}
                </select>
              </div>
              <div className="w-2/6">
                <h2 className="w-full text-left text-lg font-bold">To</h2>
                <select
                  {...register('to')}
                  className="w-full  font-bold text-slate-700 "
                >
                  {query.data?.results &&
                    Object.keys(query.data?.results).map((curr) => (
                      <option key={curr} value={curr} label={curr}>
                        {curr}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end ">
              <button
                type="submit"
                onClick={handleConvert}
                className="m-2 rounded-lg bg-slate-200 px-4 py-1 font-medium text-cyan-800 hover:opacity-60 "
              >
                Convert
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CurrencyConvert
