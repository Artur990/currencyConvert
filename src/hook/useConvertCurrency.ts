import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  CurrenciesServices,
  GetConvertData,
} from "../services/CurrenciesServices";
import { useNavigate } from "react-router-dom";

type CurrencyUseForm = GetConvertData;
export const CONVERT_KEY = "CurrenciesExChange";

export const useConvertCurrency = () => {
  const navigate = useNavigate();
  const { handleSubmit, watch, ...restForm } = useForm<CurrencyUseForm>();
  const { from, to, amount } = watch();
  const date = new Date();

  const query = useQuery({
    queryKey: [CONVERT_KEY, from, to, amount],
    enabled: false,
    queryFn: () => CurrenciesServices.getConvert({ from, to, amount }),
  });

  const handleConvert = useCallback(
    handleSubmit(() => {
      query.refetch();
      navigate("/history");
    }),
    [handleSubmit]
  );
  return {
    form: {
      ...restForm,
      handleConvert,
      handleSubmit,
    },
    query,
  };
};
