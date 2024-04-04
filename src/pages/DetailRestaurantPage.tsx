import {
  BackToHome,
  Category,
  ImageRestaurant,
  Label,
  PostReview,
  Review,
} from "@/components/main/DetailRestaurant";
import Layout from "@/layouts/Layout";
import { getDetailRestaurant } from "@/services/restaurant";
import { DetailRestaurant } from "@/types/restaurant";
import React from "react";
import { useParams } from "react-router-dom";

type State = {
  restaurant: DetailRestaurant | null;
  loading: boolean;
  error: boolean;
};

type Props = {
  id: string;
};

export default function DetailRestaurantPage() {
  const { id } = useParams();

  return <DetailRestaurantComponent id={id as string} />;
}

// @TODO change to class component and fetch to API
class DetailRestaurantComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      restaurant: null,
      loading: true,
      error: false,
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);

    try {
      const responseData = await getDetailRestaurant(this.props.id);

      if (responseData.error) throw new Error(responseData.message);

      this.setState({
        loading: false,
        restaurant: responseData.restaurant,
      });
    } catch (error) {
      this.setState({ error: true, loading: false });

      if (error instanceof Error) console.error(error.message);
      else console.error("There is an error");
    }
  }

  render() {
    const { restaurant, loading, error } = this.state;

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

    if (restaurant) {
      return (
        <Layout>
          <div className="max-w-6xl mx-auto px-4 pt-3 pb-12 xl:px-0">
            <BackToHome />

            <ImageRestaurant pirctureId={restaurant.pictureId} />

            <h1 className="text-slate-800 font-semibold text-2xl leading-7">
              {restaurant.name}
            </h1>

            <div className="mt-2 flex items-center gap-2">
              <Label>Address:</Label>
              <h3 className="text-slate-700 font-normal text-balance">
                {restaurant.address}, {restaurant.city}
              </h3>
            </div>

            <div className="mt-1 flex items-center gap-2">
              <Label>Rating:</Label>
              <h4 className="text-sm">
                {"⭐".repeat(Math.floor(restaurant.rating))}
              </h4>
            </div>

            <div className="mt-6">
              <Label>Description:</Label>
              <p className="text-slate-600 font-normal text-sm leading-5 mt-1">
                {restaurant.description}
              </p>
            </div>

            <div className="mt-6">
              <Label>Categories:</Label>
              <div className="mt-1 inline-flex flex-wrap gap-2">
                {restaurant.categories.map((category) => (
                  <Category>{category.name}</Category>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label>List Menu:</Label>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Label>List of Food 🍕:</Label>
                  <ul className="mt-1 space-y-1">
                    {restaurant.menus.foods.map((food) => (
                      <li className="text-sm">👉 {food.name}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Label>List of Drink 🍷:</Label>
                  <ul className="mt-1 space-y-1">
                    {restaurant.menus.drinks.map((drink) => (
                      <li className="text-sm">👉 {drink.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Label>Customes Reviews:</Label>
              <div className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {restaurant.customerReviews.map((review) => (
                  <Review {...review} />
                ))}
                <PostReview />
              </div>
            </div>
          </div>
        </Layout>
      );
    }
  }
}
