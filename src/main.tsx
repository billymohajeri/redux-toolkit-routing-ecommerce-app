import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NotFound from "./pages/NotFound.tsx";
import Register from "./pages/Register.tsx";
import ProductDetails from "./components/products/ProductDetails.tsx";
import SignIn from "./pages/SignIn.tsx";
import Contact from "./pages/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import ProductList from "./components/products/ProductList.tsx";
import { store } from "./store/store.ts";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Navbar />,
    children: [
      { path: "/", element: <ProductList /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "/register", element: <Register /> },
      { path: "/signin", element: <SignIn /> },
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
