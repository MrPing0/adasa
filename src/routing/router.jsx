import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import BlogData from "../components/BlogData/BlogData";
import About from "../components/About/About";
import Privacy from "../components/Privacy/Privacy";
import Terms from "../components/Terms/Terms";
import NotFound from "../components/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogData /> },
      { path: "about", element: <About /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
