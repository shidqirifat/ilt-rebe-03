import { getListRestaurant } from "@/services/restaurant";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useListRestaurant() {
  const [keyword, setKeyword] = useState("");
  const [debounceValue, setDebounceValue] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["list-restaurant", debounceValue],
    queryFn: () => getListRestaurant(debounceValue),
    staleTime: Infinity,
  });

  useEffect(() => {
    const setDebounce = setTimeout(() => setDebounceValue(keyword), 500);

    return () => {
      clearTimeout(setDebounce);
    };
  }, [keyword]);

  return {
    restaurants: data?.restaurants || [],
    loading: isLoading,
    error: isError,
    keyword,
    setKeyword,
  };
}
