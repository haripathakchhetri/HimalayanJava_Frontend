import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FrontPage from "./components/FrontPage"
import RootLayout from "./components/RootLayout"
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProductDetail from "./product/ProductDetail";
import CartPage from "./cart/CartPage";
import { useState } from "react";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./admin-panel/Layout";
import User from "./admin-ui/User";
import Products from "./admin-ui/Products";
import Orders from "./admin-ui/Orders";
import Dashboard from "./admin-ui/Dashboard";
import AddForm from "./admin-ui/AddForm";
import ProductEdit from "./admin-panel/ProductEdit/ProductEdit";


const App = () => {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <FrontPage />,

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
        },


        //admin routes
        {
          path: 'admin',
          element: <AdminRoute />,
          children: [

            {
              path: 'admin-dashboard',
              element: <Dashboard />
            },

            {
              path: "user-details",
              element: <User />
            },

            {
              path: "products",
              element: <Products />
            },

            {
              path: "order-details",
              element: <Orders />
            },

            {
              path: 'product-add',
              element: <AddForm />
            },

            {
              path: 'product-edit/:id',
              element: <ProductEdit />
            }
          ]
        }
      ]


    }
  ]);

  return <RouterProvider router={router} />
}
export default App