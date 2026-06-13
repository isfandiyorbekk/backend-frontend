import React from "react";
import Users from "./UsersPage";
import Navbar from "./Navbar";
import ProductsPage from "./ProductsPage";
import MaqolaPage from "./MaqolaPage";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "./NotFound";
import AdminLayout from "../layouts/AdminLayout";
import UsersAdmin from "../companets/UsersAdmin";
import ProductAdmin from "../companets/ProductAdmin";
import Posts from "../companets/Posts";
import UserDetailPage from "../companets/UserDetailPage";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Users />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/maqollar",
          element: <MaqolaPage />,
        },
      ],
    },
    {
      path: `users/:id`,
      element: <UserDetailPage />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "usersAdmin",
          element: <UsersAdmin />,
        },
        {
          path: "productAdmin",
          element: <ProductAdmin />,
        },
        {
          path: "postsAdmin",
          element: <Posts />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
