import Hero from "@/components/main/Hero";
import ListRestaurant from "@/components/main/ListRestaurant";
import { restaurants } from "@/datas/restaurant";
import Layout from "@/layouts/Layout";

// @TODO change to class component and fetch to API
export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ListRestaurant restaurants={restaurants} />
    </Layout>
  );
}
