import { CONFIG } from "@/configs/data";
import { Restaurant } from "@/types/restaurant";
import { Link } from "react-router-dom";

const CardRestaurant = (props: Restaurant) => {
  return (
    <div className="rounded-lg overflow-hidden shadow border border-slate-100">
      <img
        src={`${CONFIG.BASE_URL_IMAGE}/${props.pictureId}`}
        alt="Melting Pot"
        className="object-cover h-48 w-full"
      />
      <div className="p-4">
        <Link
          to={`/${props.id}`}
          className="text-xl font-medium leading-6 text-sky-600 underline underline-offset-2"
        >
          {props.name}
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <h4 className="text-base text-slate-700 leading-5 font-normal">
            {props.city}
          </h4>
          <div className="border-l border-slate-400 h-4 w-0" />
          <h4 className="text-base leading-5 font-normal">
            {"⭐".repeat(Math.floor(props.rating))}
          </h4>
        </div>

        <p className="text-slate-600 font-normal leading-5 text-sm mt-2 line-clamp-4">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default function ListRestaurant({
  restaurants,
}: {
  restaurants: Array<Restaurant>;
}) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 xl:px-0 max-w-6xl mx-auto">
      {restaurants.map((restaurant) => (
        <CardRestaurant key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
}
