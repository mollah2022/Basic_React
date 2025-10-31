import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Contract from "../pages/Contract";
import Portfolio from "../pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contract",
        element: <Contract />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
