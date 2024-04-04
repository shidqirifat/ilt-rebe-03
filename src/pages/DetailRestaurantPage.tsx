import {
  BackToHome,
  Category,
  ImageRestaurant,
  Label,
  PostReview,
  Review,
} from "@/components/main/DetailRestaurant";
import { detailRestaurant } from "@/datas/restaurant";
import Layout from "@/layouts/Layout";
import { DetailRestaurant } from "@/types/restaurant";

// @TODO change to class component and fetch to API
export default function DetailRestaurantPage() {
  window.scrollTo(0, 0);

  const restaurant: DetailRestaurant = detailRestaurant;

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
