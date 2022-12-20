import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between item-center h-14 w-full  bg-slate-900 text-white p-1  ">
      <h1 className=" text-3xl font-bold  text-stone-400 ">Exchange</h1>
      <ul className="flex">
        <Link to="/history" className="p-4">
          Histry
        </Link>
        <Link to="/" className="p-4">
          Exchange
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
