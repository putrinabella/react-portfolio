import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import AboutPage from "../pages/AboutPage";
import ExperiencePage from "../pages/ExperiencePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
    ],
  },
]);

export default router;
