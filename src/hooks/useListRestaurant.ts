import { getListRestaurant } from "@/services/restaurant";
import { Restaurant } from "@/types/restaurant";
import { useEffect, useState } from "react";

export default function useListRestaurant() {
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchListRestaurant() {
      try {
        const responseData = await getListRestaurant();

        if (responseData.error) throw new Error(responseData.message);

        setLoading(false);
        setRestaurants(responseData.restaurants);
      } catch (error) {
        setError(true);
        setLoading(false);

        if (error instanceof Error) console.error(error.message);
        else console.error("There is an error");
      }
    }

    fetchListRestaurant();
  }, []);

  return {
    restaurants,
    loading,
    error,
  };
}
