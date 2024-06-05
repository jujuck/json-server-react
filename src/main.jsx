import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Hero from "./pages/Hero.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return fetch("http://localhost:3000/super-heroes")
        .then((res) => res.json())
        .then((data) => data);
    },
  },
  {
    path: "/heroes/:id",
    element: <Hero />,
    loader: ({ params }) => {
      return fetch(`http://localhost:3000/super-heroes/${params.id}`)
        .then((res) => res.json())
        .then((data) => data);
    },
  },
  {
    path: "/favory",
    element: <App />,
    loader: () => {
      return fetch(`http://localhost:3000/super-heroes?favory=true`)
        .then((res) => res.json())
        .then((data) => data);
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
