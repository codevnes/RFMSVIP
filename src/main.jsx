
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./page/Home";
import ProductDetail from "./components/ProductDetail";
import Layout from "./components/Layout/Layout";
import "./index.css";
import SinglePost from "./page/SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePage /></Layout>
  },
  {
    path: "/product/:slug",
    element: <Layout> <ProductDetail /></Layout>
  },
  {
    path: "/post/:slug",
    element: <Layout><SinglePost /></Layout>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);