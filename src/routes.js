import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import Blog from "./Blog";
// import { Landing } from "./components/Landing/Landing";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Blog />,
      errorElement: <h1>404: Page not found</h1>,
      children: [
        {
            path: "/",
            // element: <Landing />
        }
      ]
    }
  ])