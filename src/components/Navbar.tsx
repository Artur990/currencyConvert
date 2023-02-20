import { Link } from 'react-router-dom'

export const Navbar = () => (
  <div className="flex justify-between item-center h-14 w-full min-w-[320px] bg-slate-900 text-white p-1  ">
    <Link to="/">
      <h1 className=" text-3xl font-bold  text-stone-400 ">Exchange</h1>
    </Link>
    <ul className="flex">
      <Link to="/history" className="p-4">
        Histry
      </Link>
    </ul>
  </div>
)
