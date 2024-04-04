import Hero from "@/components/main/Hero";
import ListRestaurant from "@/components/main/ListRestaurant";
import Layout from "@/layouts/Layout";
import { getListRestaurant } from "@/services/restaurant";
import { Restaurant } from "@/types/restaurant";
import { useEffect, useState } from "react";

// @TODO change to functional component and fetch to API
export default function HoamePage() {
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

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-700">
        <h2 className="text-2xl text-white font-medium">There is an error</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl text-sky-600 font-medium">Loading...</h2>
      </div>
    );
  }

  return (
    <Layout>
      <Hero />
      <ListRestaurant restaurants={restaurants} />
    </Layout>
  );
}
