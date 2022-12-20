import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useGetAllCurrencies } from "../hook/useGetAllCurrencies";
import { useNavigate } from "react-router-dom";
import { useConvertCurrency } from "../hook/useConvertCurrency";

const Currencyconverter = () => {
  const {
    form: {
      register,
      handleConvert,
      formState: { errors },
    },
    query,
  } = useConvertCurrency();

  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetAllCurrencies();

  if (isLoading) {
    return <div> ladowanie...</div>;
  }
  if (isError) {
    return <div>Coś poszło nie tak</div>;
  }

  return (
    <>
      <div className="h-screen w-screen  flex justify-center 	items-center flex-col  bg-slate-700">
        <div className="w-6/12 max-h-60 bg-orange  border-b-gray-light flex justify-between g-12    rounded-sm">
          <div className=" bg-slate-400  w-3/4 h-32 rounded-md p-1">
            <form onSubmit={handleConvert}>
              <div className=" w-full h-20   bg-slate-400 p-3 rounded-md gap-2 flex justify-between ">
                <div className="w-2/6">
                  <h2 className="w-full text-lg font-bold text-left">Amount</h2>
                  <input
                    type="string"
                    className="w-full"
                    {...register("amount", { required: true })}
                  />
                  {errors.amount && <span>Wpisz ilość</span>}
                </div>
                <div className="w-2/6">
                  <h2 className="w-full text-lg font-bold text-left">From</h2>
                  <select
                    {...register("from")}
                    className="w-full font-bold  text-slate-700 "
                  >
                    {data?.results &&
                      Object.keys(data?.results).map((curr) => (
                        <option key={curr} value={curr} label={curr}>
                          {curr}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="w-2/6">
                  <h2 className="w-full text-lg font-bold text-left">To</h2>
                  <select
                    {...register("to")}
                    className="w-full font-bold text-slate-700  "
                  >
                    {data?.results &&
                      Object.keys(data?.results).map((curr) => (
                        <option key={curr} value={curr} label={curr}>
                          {curr}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end p-3">
                <button
                  type="submit"
                  // onClick={handleConvert}
                  className="w-24 h-6 bg-gray-50 text-black rounded-md font-medium border-r-zinc-900"
                >
                  Convert
                </button>
              </div>
            </form>
          </div>
          <div>
            <h1 className=" font-bold text-teal-600 pt-10 pl-100">
              {" "}
              {/* 10 PLN = 44 USD{" "} */}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currencyconverter;

{
  /* <button onClick={() => navigate("/history")}></button>
      <div className="container-curr">
        <h2 className="w-full text-8xl font-bold text-center">Amount</h2>
        <div className="content-curr">
          <form onSubmit={handleConvert}>
            <input
              style={errors.amount && { borderColor: "red" }}
              type="number"
              {...register("amount", { required: true })}
            />
            {errors.amount && <span>Wpisz ilość</span>}
            <select {...register("from")}>
              {data?.results &&
                Object.keys(data?.results).map((curr) => (
                  <option key={curr} value={curr} label={curr}>
                    {curr}
                  </option>
                ))}
            </select>
            <select {...register("to")}>
              {data?.results &&
                Object.keys(data?.results).map((curr) => (
                  <option key={curr} value={curr} label={curr}>
                    {curr}
                  </option>
                ))}
            </select>
            <input type="submit" />
            <button type="submit" onClick={handleConvert}>
              Konweruj
            </button>
          </form>
        </div>
      </div> */
}
