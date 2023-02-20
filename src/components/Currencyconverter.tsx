import { useGetAllCurrencies } from '../hook/useGetAllCurrencies'
import { useConvertCurrency } from '../hook/useConvertCurrency'

const Currencyconverter = () => {
  const {
    form: {
      register,
      handleConvert,
      formState: { errors },
    },
  } = useConvertCurrency()

  const { query } = useGetAllCurrencies()

  if (query.isLoading) {
    return (
      <div className="h-screen w-screen  bg-slate-700 text-white p-2  text-2xl font-bold ">
        Loading...
      </div>
    )
  }
  if (query.isError) {
    return (
      <div className="h-screen w-screen  bg-slate-700 text-white p-2  text-2xl font-bold ">
        Something went wrong
      </div>
    )
  }

  return (
    <div className="h-screen w-screen min-w-[320px] flex justify-center 	items-center flex-col  bg-slate-700">
      <div className="w-full sm:w-8/12 max-h-60 bg-orange  border-b-gray-light flex justify-between g-12    rounded-sm">
        <div className=" bg-slate-400  w-full sm:w-3/4 h-32 rounded-md p-1">
          <form onSubmit={handleConvert}>
            <div className=" w-full h-35   bg-slate-400 p-3 rounded-md gap-2 flex justify-between ">
              <div className="w-2/6">
                <h2 className="w-full text-lg font-bold text-left">Amount</h2>
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
                <h2 className="w-full text-lg font-bold text-left">From</h2>
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
                <h2 className="w-full text-lg font-bold text-left">To</h2>
                <select
                  {...register('to')}
                  className="w-full font-bold text-slate-700  "
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
                className="px-4 py-1 m-2 bg-slate-200 font-medium text-cyan-800 rounded-lg hover:opacity-60 "
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

export default Currencyconverter
