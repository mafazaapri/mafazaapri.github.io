import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import WorkNorrisPage from "./pages/WorkNorrisPage.jsx";
import WorkPlatformePage from "./pages/WorkPlatformePage.jsx";
import WorkRojorganicsPage from "./pages/WorkRojorganicsPage.jsx";
import WorkHomeSpace from "./pages/WorkHomeSpace.jsx";
import WorkBigGameGolf from "./pages/WorkBigGameGolf.jsx";
import WorkBigGameGolfBranding from "./pages/WorkBigGameGolfBranding.jsx";
import NotFoundPage from "./404.jsx";
import Homepage from "./pages/Homepage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/work/norris-mclaughlin",
        element: <WorkNorrisPage />,
      },
      {
        path: "/work/home-space",
        element: <WorkHomeSpace />,
      },
      {
        path: "/work/platforme-6610",
        element: <WorkPlatformePage />,
      },
      {
        path: "/work/rojorganics",
        element: <WorkRojorganicsPage />,
      },
      {
        path: "/work/big-game-golf",
        element: <WorkBigGameGolf />,
      },
      {
        path: "/work/big-game-golf-branding",
        element: <WorkBigGameGolfBranding />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
