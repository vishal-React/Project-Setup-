import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import App from "../components/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
