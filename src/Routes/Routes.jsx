import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import NotFoundPage from "../Components/NotFoundPage";
import ScrollToTop from "../Components/ScrollToTop";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <MainLayout></MainLayout>
      </>
    ),
    errorElement: <NotFoundPage></NotFoundPage>,
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
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default router;
