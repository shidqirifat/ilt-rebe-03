import Hero from "@/components/main/Hero";
import ListRestaurant from "@/components/main/ListRestaurant";
import Layout from "@/layouts/Layout";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ListRestaurant />
    </Layout>
  );
}
