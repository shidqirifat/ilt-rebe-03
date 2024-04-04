import Error from "@/components/global/Error";
import Loading from "@/components/global/Loading";
import Hero from "@/components/main/Hero";
import ListRestaurant from "@/components/main/ListRestaurant";
import useListRestaurant from "@/hooks/useListRestaurant";
import Layout from "@/layouts/Layout";

// @TODO change to functional component using custom hooks
export default function HoamePage() {
  const { restaurants, loading, error } = useListRestaurant();

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <Layout>
      <Hero />
      <ListRestaurant restaurants={restaurants} />
    </Layout>
  );
}
