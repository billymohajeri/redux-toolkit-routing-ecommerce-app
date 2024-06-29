import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProductList from "./components/ProductList.tsx";
import Header from "./components/Header.tsx";
import Contact from "./components/Contact.tsx";

import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "./store.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <ProductList /> },
      { path: "/contact", element: <Contact /> },
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
