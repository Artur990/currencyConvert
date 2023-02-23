import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from '../hook/action'

export const History = () => {
  const { data, clear } = useLocalStorage()
  return (
    <div className=" flex  min-h-screen w-screen min-w-[320px] flex-col items-center justify-center   bg-slate-700">
      <h1 className="m-3 text-slate-200">Your historical exchange</h1>
      {data
        ? data?.map((el) => (
            <div
              key={uuidv4()}
              className="flex w-4/5 justify-between rounded-md  bg-slate-400  p-4 outline outline-2 sm:w-2/5"
            >
              <h1 className="w-20">
                {el?.amount} {el?.base}
              </h1>
              <div>&lt;-&gt;</div>
              <div className="w-20">
                {el?.result && Object.values(el?.result)[0]}
                {el?.result && Object.keys(el?.result)[0]}
              </div>
            </div>
          ))
        : 'Your history is empty'}
      <button
        onClick={() => clear()}
        type="button"
        className="m-2 rounded-lg bg-slate-200 px-4 py-1 font-medium text-cyan-800 hover:opacity-60 "
      >
        Remove
      </button>
    </div>
  )
}
