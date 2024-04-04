import { getDetailRestaurant } from "@/services/restaurant";
import { DetailRestaurant } from "@/types/restaurant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useDetailRestaurant() {
  const [restaurant, setRestaurant] = useState<DetailRestaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDetailRestaurant() {
      try {
        const responseData = await getDetailRestaurant(id as string);

        if (responseData.error) throw new Error(responseData.message);

        setLoading(false);
        setRestaurant(responseData.restaurant);
      } catch (error) {
        setError(true);
        setLoading(false);

        if (error instanceof Error) console.error(error.message);
        else console.error("There is an error");
      }
    }

    window.scrollTo(0, 0);

    fetchDetailRestaurant();
  }, [id]);

  return {
    restaurant,
    loading,
    error,
  };
}
