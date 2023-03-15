import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import { Landing } from "./components/Landing/Landing";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>404: Page not found</h1>,
      children: [
        {
            path: "/",
            // element: <Landing />
        }
      ]
    }
  ])