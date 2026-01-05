import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import CategoriesPage from "../Pages/CategoriesPage";
import { categoriesData } from "../data/categoriesData";
import CollectionPage from "../Pages/CollectionPage";
import DetailsPage from "../Pages/DetailsPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import App from "../App";
import AboutPage from "../Pages/AboutPage";
import ProfilePage from "../Pages/ProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Profile",
        element: <ProfilePage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <AboutPage />,
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
    ],
  },
]);

export default router;
