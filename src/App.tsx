import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailRestaurantPage from "./pages/DetailRestaurantPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:id", element: <DetailRestaurantPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
