import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wishlist from "./Wishlist";
import { WishlistProvider } from "./WishlistContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WishlistProvider>
    <div className="flex flex-col">
      <RouterProvider router={router} />
    </div>
  </WishlistProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
