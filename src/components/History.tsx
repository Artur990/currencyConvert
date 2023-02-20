import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from '../hook/action'

export const History = () => {
  const { data, clear } = useLocalStorage()
  return (
    <div className=" min-h-screen   w-screen min-w-[320px] flex justify-center 	items-center flex-col bg-slate-700">
      <h1 className="text-slate-200 m-3">Your historical exchange</h1>
      {data
        ? data?.map((el) => (
            <div
              key={uuidv4()}
              className="flex w-4/5 sm:w-2/5 justify-between  outline  outline-2 p-4 rounded-md bg-slate-400"
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
        className="px-4 py-1 m-2 bg-slate-200 font-medium text-cyan-800 rounded-lg hover:opacity-60 "
      >
        Remove
      </button>
    </div>
  )
}
