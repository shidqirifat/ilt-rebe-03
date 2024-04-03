import {
  BackToHome,
  Category,
  ImageRestaurant,
  Label,
  PostReview,
  Review,
} from "@/components/main/DetailRestaurant";
import Layout from "@/layouts/Layout";

export default function DetailRestaurantPage() {
  window.scrollTo(0, 0);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 pt-3 pb-12 xl:px-0">
        <BackToHome />

        <ImageRestaurant />

        <h1 className="text-slate-800 font-semibold text-2xl leading-7">
          Melting Point
        </h1>

        <div className="mt-2 flex items-center gap-2">
          <Label>Address:</Label>
          <h3 className="text-slate-700 font-normal text-balance">
            Jln. Pandeglang no 19, Medan
          </h3>
        </div>

        <div className="mt-1 flex items-center gap-2">
          <Label>Rating:</Label>
          <h4 className="text-sm">{"⭐".repeat(4)}</h4>
        </div>

        <div className="mt-6">
          <Label>Description:</Label>
          <p className="text-slate-600 font-normal text-sm leading-5 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            placeat, nostrum illo sed ad facere laborum voluptas recusandae
            autem iusto, hic suscipit id dolores tempora itaque officiis aliquam
            quos! Quos cum quibusdam pariatur, nemo minima maiores atque quae
            veritatis saepe dolore minus repellendus nostrum amet facilis ad
            rerum! Repellendus temporibus laborum ipsa, obcaecati iure libero
            cumque amet hic cum, omnis iste velit facilis et, beatae recusandae
            maiores accusamus! Alias animi ea dolores quas, neque eum quibusdam
            earum. Libero, pariatur praesentium. Repellendus obcaecati iusto
            veritatis ea facilis vel quas illo voluptate vero, odio repellat
            fugit quia error? Cupiditate veniam labore perspiciatis accusantium
            quasi tempore esse nihil voluptatem unde. Culpa!
          </p>
        </div>

        <div className="mt-6">
          <Label>Categories:</Label>
          <div className="mt-1 inline-flex flex-wrap gap-2">
            <Category>Italy</Category>
            <Category>Modern</Category>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Label>List Menu:</Label>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Label>List of Food 🍕:</Label>
              <ul className="mt-1 space-y-1">
                <li className="text-sm">👉 Paket rosemary</li>
                <li className="text-sm">👉 Paket rosemary</li>
                <li className="text-sm">👉 Paket rosemary</li>
                <li className="text-sm">👉 Paket rosemary</li>
              </ul>
            </div>

            <div>
              <Label>List of Drink 🍷:</Label>
              <ul className="mt-1 space-y-1">
                <li className="text-sm">👉 Paket rosemary</li>
                <li className="text-sm">👉 Paket rosemary</li>
                <li className="text-sm">👉 Paket rosemary</li>
                <li className="text-sm">👉 Paket rosemary</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Label>Customes Reviews:</Label>
          <div className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Review name="Shidqi" review="Enak banget!" date="20 Juli 2023" />
            <Review name="Shidqi" review="Enak banget!" date="20 Juli 2023" />
            <Review name="Shidqi" review="Enak banget!" date="20 Juli 2023" />
            <Review name="Shidqi" review="Enak banget!" date="20 Juli 2023" />
            <Review name="Shidqi" review="Enak banget!" date="20 Juli 2023" />
            <PostReview />
          </div>
        </div>
      </div>
    </Layout>
  );
}
