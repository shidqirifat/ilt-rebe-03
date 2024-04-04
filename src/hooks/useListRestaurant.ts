import { getListRestaurant } from "@/services/restaurant";
import { useQuery } from "@tanstack/react-query";

export default function useListRestaurant() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["list-restaurant"],
    queryFn: getListRestaurant,
    staleTime: Infinity,
  });

  return {
    restaurants: data?.restaurants || [],
    loading: isLoading,
    error: isError,
  };
}
