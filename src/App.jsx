import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FrontPage from "./components/FrontPage"
import RootLayout from "./components/RootLayout"
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProductDetail from "./product/ProductDetail";
import CartPage from "./cart/CartPage";
import { useState } from "react";

const App = () => {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <FrontPage />
        },

        {
          path: "login",
          element: <Login />
        },

        {
          path: "register",
          element: <Register />
        },

        {
          path: "product-detail/:id",
          element: <ProductDetail />,
        },

        {
          path: "cart-page",
          element: <CartPage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />
}
export default App