import { Link } from 'react-router-dom'

export const Navbar = () => (
  <div className="item-center flex h-14 w-full min-w-[320px] justify-between bg-slate-900 p-1 text-white  ">
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
