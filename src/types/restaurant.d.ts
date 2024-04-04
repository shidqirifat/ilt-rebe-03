export type Restaurant = {
  id: string;
  name: string;
  description: string;
  pictureId: string;
  city: string;
  rating: number;
};

type Entity = {
  name: string;
};

type CustomerReview = {
  name: string;
  review: string;
  date: string;
};

export type DetailRestaurant = {
  id: string;
  name: string;
  description: string;
  city: string;
  address: string;
  pictureId: string;
  categories: Array<Entity>;
  menus: {
    foods: Array<Entity>;
    drinks: Array<Entity>;
  };
  rating: number;
  customerReviews: Array<CustomerReview>;
};
