import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Skills from "../Pages/Skills/Skills";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
    ],
  },
]);
export default router;
