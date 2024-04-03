const CardRestaurant = () => {
  const BASE_IMAGE = "https://restaurant-api.dicoding.dev/images/medium";

  return (
    <div className="rounded-lg overflow-hidden shadow border border-slate-100">
      <img
        src={`${BASE_IMAGE}/14`}
        alt="Melting Pot"
        className="object-cover h-48 w-full"
      />
      <div className="p-4">
        <h3 className="text-xl font-medium leading-6 text-sky-600">
          Melting Pot
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <h4 className="text-base text-slate-700 leading-5 font-normal">
            Medan
          </h4>
          <div className="border-l border-slate-400 h-4 w-0" />
          <h4 className="text-base leading-5 font-normal">⭐⭐⭐⭐</h4>
        </div>

        <p className="text-slate-600 font-normal leading-5 text-sm mt-2 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deserunt
          soluta ea ullam culpa a nulla, sit quam debitis eum. Quibusdam
          voluptas commodi rerum dolores maxime iste. Culpa rem quam quia
          officia quasi iste magnam fugiat odio tempora minus quos quisquam,
          alias illo, nesciunt repellendus recusandae. Neque cum et eius!
        </p>
      </div>
    </div>
  );
};

export default function ListRestaurant() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-4 xl:px-0 max-w-6xl mx-auto">
      <CardRestaurant />
      <CardRestaurant />
      <CardRestaurant />
      <CardRestaurant />
    </div>
  );
}
