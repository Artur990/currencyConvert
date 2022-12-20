import { useState, useEffect, useCallback } from "react";
import {
  useIsRestoring,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { CONVERT_KEY } from "./useConvertCurrency";
import { QueryCache } from "@tanstack/react-query";
export const useHistiry = () => {
  const [history, setHistory] = useState<any[]>([]);
  const queryClient = useQueryClient();
  const histor = useQuery<any[]>([CONVERT_KEY]);
  const isRestoring = useIsRestoring();

  const queriess = queryClient.getQueryCache();

  useEffect(() => {
    const queries = queryClient.getQueriesData([CONVERT_KEY]);

    const data = queries.map((query) => query[1]);

    setHistory(data);
  }, [isRestoring]);
  const clear = useCallback(() => {
    queryClient.clear();
    console.log("callBack upDate");
  }, []);
  return { history, queryClient, clear, histor, queriess };
};
