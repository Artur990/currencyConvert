import { CurrenciesServices } from "../services/CurrenciesServices";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
export const useGetAllCurrencies = () => {
  const { data, isLoading, ...restQuery } = useQuery(
    ["allCurrencies"],
    CurrenciesServices.getCurrencies
  );
  // const currencies = useMemo(
  //   () => data?.result && Object.keys(data?.result),
  //   [isLoading, data?.result]
  // );

  return { data, isLoading, ...restQuery };
};
