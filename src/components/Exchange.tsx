import { useHistiry } from "../hook/useHistiry";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { CONVERT_KEY } from "../hook/useConvertCurrency";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

// const queryClient = useQueryClient();
export const historyLoader = async (client: QueryClient) => {
  return await client.prefetchQuery<any>(
    [CONVERT_KEY],
    () => localStorage.getItem("REACT_QUERY_OFFLINE_CACHE")
    // client.getQueriesData([CONVERT_KEY])
  );
};

const Exchange = () => {
  const { history, clear, histor } = useHistiry();

  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("REACT_QUERY_OFFLINE_CACHE") as any
    );
  }, []);
  console.log(history);
  return (
    <div className="h-screen  w-screen flex justify-center 	items-center flex-col bg-slate-700">
      <h1 className="text-slate-200 m-3">Twoje historyczny wymiany</h1>
      <div
        className="w-96 h-auto bg-slate-400 flex justify-between flex-col p-6 rounded-md gap-2
    "
      >
        {history
          ? history?.map((el, index) => (
              <div
                key={index}
                className="flex justify-between  outline  outline-2 p-4 rounded-md"
              >
                <h1>
                  {el?.amount} {el?.base}
                </h1>
                <h2>=</h2>
                {el?.result && Object.values(el?.result)[0]}
                {el?.result && Object.keys(el?.result)[0]} <h2>2022-09-22</h2>
              </div>
            ))
          : "histroia jest pusta"}
      </div>
      <button>Remove</button>
    </div>
  );
};

export default Exchange;

// <div className="container">
//   <h2 className="w-full text-lg font-bold text-left">Amount</h2>
//   <button onClick={clear}>Remove</button>
//   <div className="content">
//     <h1>Exchange</h1>
//     {history
//       ? history?.map((el, index) => (
//           <ul key={index}>
//             <li>
//               ILość {el?.amount} - {el?.base} to{" "}
//               {el?.result && Object.values(el?.result)[0]}{" "}
//               {el?.result && Object.keys(el?.result)[0]}-
//             </li>
//           </ul>
//         ))
//       : "histroia jest pusta"}
//   </div>
// </div>
