import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import CategoriesPage from "../Pages/CategoriesPage";
import { categoriesData } from '../data/categoriesData';
import CollectionPage from "../Pages/CollectionPage";
import DetailsPage from "../Pages/DetailsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage categories={categoriesData} />,
  },
  {
    path: "/collection/:categoryId",
    element: <CollectionPage categories={categoriesData} />,
  },
  {
    path: "/details/:categoryId/:itemId",
    element: <DetailsPage categories={categoriesData} />,
  },
]);

export default router;
