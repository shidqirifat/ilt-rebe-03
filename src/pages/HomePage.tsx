import Hero from "@/components/main/Hero";
import ListRestaurant from "@/components/main/ListRestaurant";
import Layout from "@/layouts/Layout";
import { getListRestaurant } from "@/services/restaurant";
import { Restaurant } from "@/types/restaurant";
import React from "react";

type State = {
  restaurants: Array<Restaurant>;
  loading: boolean;
  error: boolean;
};

// @TODO change to class component and fetch to API
export default class HoamePage extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      restaurants: [],
      loading: true,
      error: false,
    };
  }

  async componentDidMount() {
    try {
      const responseData = await getListRestaurant();

      if (responseData.error) throw new Error(responseData.message);

      this.setState({
        loading: false,
        restaurants: responseData.restaurants,
      });
    } catch (error) {
      this.setState({ error: true, loading: false });

      if (error instanceof Error) console.error(error.message);
      else console.error("There is an error");
    }
  }

  render() {
    const { error, loading } = this.state;
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
        <ListRestaurant restaurants={this.state.restaurants} />
      </Layout>
    );
  }
}
