import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Details from "../pages/Portfolio/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/projects/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-rosy.vercel.app/projects/details/${params.id}`
          ),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
