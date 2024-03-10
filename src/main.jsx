import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import WorkNorrisPage from "./pages/WorkNorrisPage.jsx";
import WorkPlatformePage from "./pages/WorkPlatformePage.jsx";
import WorkRojorganicsPage from "./pages/WorkRojorganicsPage.jsx";
import WorkHomeSpace from "./pages/WorkHomeSpace.jsx";
import WorkBigGameGolf from "./pages/WorkBigGameGolf.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
