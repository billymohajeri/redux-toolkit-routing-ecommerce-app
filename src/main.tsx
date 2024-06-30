import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProductList from "./components/products/ProductList.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./pages/Contact.tsx";
import SignIn from "./components/users/SignIn.tsx";
import ProductDetails from "./components/products/ProductDetails.tsx";

import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Navbar />,
    children: [
      { path: "/products", element: <ProductList /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "/signin", element: <SignIn /> },
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
