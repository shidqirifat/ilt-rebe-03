import { getDetailRestaurant } from "@/services/restaurant";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useDetailRestaurant() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["detail-restaurant", id],
    queryFn: () => getDetailRestaurant(id as string),
    staleTime: Infinity,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    restaurant: data?.restaurant || null,
    loading: isLoading,
    error: isError,
  };
}
