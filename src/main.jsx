import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Scss/index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Team from "./Pages/Team.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Events from "./Pages/Events.jsx";
import Contacts from "./Pages/Contacts.jsx";
import About from "./Pages/About.jsx";
import Error404 from "./Pages/Error404.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
