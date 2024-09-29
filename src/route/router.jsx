import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ExperiencePage from "../pages/ExperiencePage";
import InterestPage from "../pages/InterestPage";
import SkillsPage from "../pages/SkillsPage";
import AwardsPage from "../pages/AwardsPage";

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
      {
        path: "interest",
        element: <InterestPage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "awards",
        element: <AwardsPage />,
      },
    ],
  },
]);

export default router;
