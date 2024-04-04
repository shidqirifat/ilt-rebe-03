import Error from "@/components/global/Error";
import Loading from "@/components/global/Loading";
import {
  BackToHome,
  Category,
  ImageRestaurant,
  Label,
  PostReview,
  Review,
} from "@/components/main/DetailRestaurant";
import useDetailRestaurant from "@/hooks/useDetailRestaurant";
import Layout from "@/layouts/Layout";

export default function DetailRestaurantPage() {
  const { restaurant, loading, error } = useDetailRestaurant();

  if (error) return <Error />;
  if (loading) return <Loading />;

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
              {restaurant.categories.map((category, i) => (
                <Category key={i}>{category.name}</Category>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Label>List Menu:</Label>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Label>List of Food 🍕:</Label>
                <ul className="mt-1 space-y-1">
                  {restaurant.menus.foods.map((food, i) => (
                    <li key={i} className="text-sm">
                      👉 {food.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Label>List of Drink 🍷:</Label>
                <ul className="mt-1 space-y-1">
                  {restaurant.menus.drinks.map((drink, i) => (
                    <li key={i} className="text-sm">
                      👉 {drink.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Label>Customes Reviews:</Label>
            <div className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {restaurant.customerReviews.map((review, i) => (
                <Review key={i} {...review} />
              ))}
              <PostReview />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
